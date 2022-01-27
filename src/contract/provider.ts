import { NetworkTypes } from 'src/types/config';
import { NetworkProvider } from 'src/types/config';
import { networkProviders } from 'src/config/providers';
import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';

/**
 * Network Provider
 */
export class Provider {
	private static provider: {
		[key: string]:
			| AlchemyProvider
			| JsonRpcProvider;
	} = {};

	/**
	 * @param {NetworkTypes} network
	 *
	 * @returns Network provider url
	 */
	private static getProvider(network: NetworkTypes): NetworkProvider {
		// let provider: NetworkProvider = networkProviders.ethereum;

		/* if (network === NetworkTypes.POLYGON) {
			provider = config.network.providers.polygon;
		} */

		switch (network) {
			case 'mainnet':
				return networkProviders.ethereum;
			case 'matic':
				return networkProviders.polygon;
			case 'binance':
				return networkProviders.binance;
			default:
				return networkProviders.ethereum;
		}
	}

	/**
	 * Set Provider
	 *
	 * @param {NetworkTypes} network
	 */
	private static set(network: NetworkTypes) {
		const provider = Provider.getProvider(network);
		if (network === 'binance') {
			Provider.provider[network] = new JsonRpcProvider(provider.rpcUrl)
		} else {
			Provider.provider[network] = new AlchemyProvider(
				provider.network,
				provider.key
			);
		}
	}

	/**
	 * Get Provider
	 *
	 * @param {NetworkTypes} network
	 *
	 * @returns Json Rpc Provider
	 */
	public static get(
		network: NetworkTypes
	): AlchemyProvider | JsonRpcProvider {
		if (!Provider.provider[network]) {
			Provider.set(network);
		}

		return Provider.provider[network];
	}
}

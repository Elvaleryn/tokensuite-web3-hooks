import { ethers } from 'ethers';
import { NetworkTypes } from 'src/types/config';
import { NetworkProvider } from 'src/types/config';
import { networkProviders } from 'src/config/providers';

/**
 * Network Provider
 */
export class Provider {
	private static provider: {
		[key: string]:
			| ethers.providers.AlchemyProvider
			| ethers.providers.JsonRpcProvider;
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
			case NetworkTypes.ETHEREUM:
				return networkProviders.ethereum;
			case NetworkTypes.POLYGON:
				return networkProviders.polygon;
			case NetworkTypes.BINANCE:
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
		if (network === NetworkTypes.BINANCE) {
			Provider.provider[network] = new ethers.providers.JsonRpcProvider(provider.rpcUrl)
		} else {
			Provider.provider[network] = new ethers.providers.AlchemyProvider(
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
	): ethers.providers.AlchemyProvider | ethers.providers.JsonRpcProvider {
		if (!Provider.provider[network]) {
			Provider.set(network);
		}

		return Provider.provider[network];
	}
}

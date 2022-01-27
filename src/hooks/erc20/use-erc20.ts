import { Erc20 } from 'src/contract/contracts/erc20';
import { UseErc20 } from 'src/types/hooks/erc20';
import { NetworkTypes } from 'src/types/config';
import { useMemo } from 'react';
import {
	AlchemyProvider,
	Web3Provider,
	JsonRpcSigner,
	JsonRpcProvider,
} from '@ethersproject/providers';
import useProvider from '../use-provider';

// Create new erc20 instance
const getTokenContract = (
	address: string,
	provider: AlchemyProvider | Web3Provider | JsonRpcSigner | JsonRpcProvider
): Erc20 => new Erc20().setAddress(address).setProvider(provider).setContract();

const useErc20 = (address: string, network: NetworkTypes, library?: Web3Provider): UseErc20 => {
	const provider = useProvider(network, library);
	return useMemo(() => {
		if (provider) {
			return getTokenContract(address, provider);
		} else {
			console.error('Wallet Connection is required');
			return null;
		}
	}, [provider, address]);
};

export default useErc20;

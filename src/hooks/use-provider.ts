import { useMemo } from 'react';
import {
	AlchemyProvider,
	Web3Provider,
	JsonRpcSigner,
	JsonRpcProvider,
} from '@ethersproject/providers';
import { NetworkTypes } from 'src/types/config';
import { UseProvider } from 'src/types/hooks/use-provider';
import { Provider } from 'src/contract/provider';

const useProvider = (
	network: NetworkTypes,
	library?: Web3Provider
): UseProvider => {
	return useMemo(():
		| Web3Provider
		| AlchemyProvider
		| JsonRpcSigner
		| JsonRpcProvider
		| null => {
		if (network === 'signer') {
			if (library) return library.getSigner();
			else {
        console.error('You tried to connect as a signer, wallet must be connected');
				return null;
			}
		} else {
			return Provider.get(network);
		}
	}, [network, library]);
};

export default useProvider;

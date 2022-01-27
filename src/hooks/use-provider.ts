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
	library: Web3Provider,
  fallback: NetworkTypes
): UseProvider => {
	return useMemo(():
		| Web3Provider
		| AlchemyProvider
		| JsonRpcSigner
		| JsonRpcProvider => {
		if (network === 'signer') {
			if (library) return library.getSigner();
      else return Provider.get(fallback);
		} else {
			return Provider.get(network);
		}
	}, [network, library]);
};

export default useProvider;

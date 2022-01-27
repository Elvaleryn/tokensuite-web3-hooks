import { useMemo } from 'react';
import { AlchemyProvider, Web3Provider, JsonRpcSigner,JsonRpcProvider } from '@ethersproject/providers';
import { NetworkTypes } from 'src/types/config';
import { UseProvider } from 'src/types/hooks/use-provider';
import { Provider } from 'src/contract/provider';
import { ethers } from 'ethers';

const useProvider = (network: NetworkTypes, library: ethers.providers.Web3Provider): UseProvider => {

  return useMemo((): Web3Provider | AlchemyProvider | JsonRpcSigner | JsonRpcProvider => {
    let _network = network;

    if (library && network === NetworkTypes.SIGNER) {
      return library.getSigner();
    } else {
      _network = network;
    }
    return Provider.get(_network);
  }, [network, library]);
};

export default useProvider;

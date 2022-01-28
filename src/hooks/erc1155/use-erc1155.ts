import { NetworkTypes } from 'src/types/config';
import { useMemo } from 'react';
import {
  AlchemyProvider,
  Web3Provider,
  JsonRpcSigner,
  JsonRpcProvider,
} from '@ethersproject/providers';
import useProvider from '../use-provider';
import { Erc1155 } from 'src/contract/contracts/erc1155';
import { UseErc1155 } from 'src/types/hooks/erc1155/use-erc1155';

// Create new erc20 instance
const getCollectionContract = (
  address: string,
  provider: AlchemyProvider | Web3Provider | JsonRpcSigner | JsonRpcProvider
): Erc1155 => new Erc1155().setAddress(address).setProvider(provider).setContract();

const useErc1155 = (address: string, network: NetworkTypes, library?: Web3Provider): UseErc1155 => {
  const provider = useProvider(network, library);

  return useMemo(() => {
    if (provider) return getCollectionContract(address, provider);
    else {
      console.error('Wallet Connection is required');
      return null;
    }
  }, [address, provider]);
};

export default useErc1155;

import { NetworkTypes } from 'src/types/config';
import { useMemo } from 'react';
import {
  AlchemyProvider,
  Web3Provider,
  JsonRpcSigner,
  JsonRpcProvider,
} from '@ethersproject/providers';
import useProvider from '../use-provider';
import { ERC721 } from 'src/contract/contracts/erc721';
import { UseErc721 } from 'src/types/hooks/erc721/use-erc721';

// Create new erc20 instance
const getCollectionContract = (
  address: string,
  provider: AlchemyProvider | Web3Provider | JsonRpcSigner | JsonRpcProvider
): ERC721 => new ERC721().setAddress(address).setProvider(provider).setContract();

const useErc721 = (address: string, network: NetworkTypes, library?: Web3Provider): UseErc721 => {
  const provider = useProvider(network, library);

  return useMemo(() => {
    if (provider) return getCollectionContract(address, provider);
    else {
      console.error('Wallet Connection is required');
      return null;
    }
  }, [address, provider]);
};

export default useErc721;

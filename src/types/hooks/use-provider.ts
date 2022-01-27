import { AlchemyProvider, Web3Provider, JsonRpcSigner, JsonRpcProvider } from '@ethersproject/providers';


// Use Allowance Hook
export type UseProvider = Web3Provider | AlchemyProvider | JsonRpcSigner | JsonRpcProvider;
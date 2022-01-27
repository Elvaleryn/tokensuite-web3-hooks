import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';

export type ContractOptions = {
  address: string;
  provider: JsonRpcProvider | JsonRpcSigner;
};

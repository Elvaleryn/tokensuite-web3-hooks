/* export enum NetworkTypes {
  SIGNER = "SIGNER",
  ETHEREUM = "mainnet",
  POLYGON = "matic",
  BINANCE = "binance",
  RINKEBY = "rinkeby",
  MUMBAI = "maticmum",
} */

export type NetworkTypes = 'signer' | 'mainnet' | 'matic' | 'binance' | 'rinkeby' | 'maticmum'

// Network Provider type
export type NetworkProvider = {
  network: string;
  key: string;
  chainId: number;
  chainIdHex: string;
  rpcUrl: string;
};

export type NetworkProviders = {
  ethereum: NetworkProvider;
  polygon: NetworkProvider;
  binance: NetworkProvider;
  rinkeby?: NetworkProvider;
  mumbai?: NetworkProvider;
}
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';

/**
 * Contract Builder
 */
export class Builder {
  protected address?: string;
  protected provider?: JsonRpcProvider | JsonRpcSigner;

  /**
   * @setAddress
   *
   * @param {string} address
   *
   * @returns {this} instance
   */
  setAddress(address: string): this {
    if (!address) {
      throw new Error('Address must be string!');
    }

    this.address = address;

    return this;
  }

  /**
   * @setWeb3
   *
   * @param {object} web3 web3 instance
   *
   * @returns {this} instance
   */
  setProvider(provider: JsonRpcProvider | JsonRpcSigner): this {
    if (!provider) {
      throw new Error('Provider must be an instance!');
    }

    this.provider = provider;

    return this;
  }
}

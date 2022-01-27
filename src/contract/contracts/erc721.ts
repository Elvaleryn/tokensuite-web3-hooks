import { ethers } from 'ethers';
import ABI from '../abis/ERC721.json';
import * as Types from 'src/types/contract/abis/';
import { BaseContract } from './base-contract';

export class ERC721 extends BaseContract {
  public contract!: Types.ERC721;

  /**
   * @setContract
   *
   * Creates contract instance with given address
   */
  setContract(): this {
    if (!this.address || !this.provider) {
      throw new Error('Please provide an address and network provider!');
    }

    this.contract = new ethers.Contract(this.address, ABI, this.provider) as any as Types.ERC721;

    return this;
  }
}

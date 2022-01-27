import { Erc20 } from "src/contract/contracts/erc20";

export type UseErc20Approve = {
  getApprove: (token: Erc20 | null, account: string | null,  spender: string, amount: string) => Promise<any>;
};

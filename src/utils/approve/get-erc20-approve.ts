import { Erc20 } from "src/contract/contracts/erc20";

export const getErc20Approve = async (token: Erc20 | null, account: string | undefined | null, spender: string, amount: string): Promise<any> => {
  if (!account) console.error('Please connect your wallet');
  if (!token) console.error('Either provider of token is wrong or token is not initialized');
  try {
    const approve = await token?.contract.approve(spender, amount, { from: account || '' });
    await approve?.wait(1);
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};

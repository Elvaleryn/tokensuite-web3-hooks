import { Erc1155 } from 'src/contract/contracts/erc1155';

export const getErc1155Approve = async (
  token: Erc1155 | null,
  account: string | undefined | null,
  operator: string
): Promise<any> => {
  if (!account) console.error('Please connect your wallet');
  if (!token) console.error('Either provider of token is wrong or token is not initialized');
  try {
    const approve = await token?.contract.setApprovalForAll(operator, true, {
      from: account || '',
    });
    await approve?.wait(1);
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};

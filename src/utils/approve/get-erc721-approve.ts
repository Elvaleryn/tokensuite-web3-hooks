import { ERC721 } from 'src/contract/contracts/erc721';

export const getErc721Approve = async (
  token: ERC721 | null,
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

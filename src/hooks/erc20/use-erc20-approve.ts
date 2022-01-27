import { useCallback } from 'react';
import { UseErc20Approve } from 'src/types/hooks/erc20/use-erc20-approve';

const useErc20Approve = (): UseErc20Approve => {
  const get = useCallback(
    async (
      token,
      account,
      spender,
      amount
    ): Promise<any> => {
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
    },
    []
  );

  return {
    getApprove: get,
  };
};

export default useErc20Approve;

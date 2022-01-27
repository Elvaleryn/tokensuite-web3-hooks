import { useCallback, useEffect, useState } from 'react';
// import { formatUnits } from 'src/helpers/number';
import { formatUnits } from 'ethers/lib/utils';
import { Erc20 } from 'src/contract/contracts/erc20';
import { UseErc20Allowance } from 'src/types/hooks/erc20/use-erc20-allowance';

const useErc20Allowance = (
  token: Erc20 | null,
  owner: string,
  spender: string
): UseErc20Allowance => {
  const [allowance, setAllowance] = useState(0);

  const fetchAllowance = useCallback(async (): Promise<void> => {
    await token?.contract.allowance(owner, spender).then((BN) => {
      setAllowance(Number(formatUnits(BN)));
    });
  }, [owner, spender, token?.contract]);

  // Fetch Allowance
  useEffect(() => {
    token && owner && spender && fetchAllowance();
  }, [fetchAllowance, owner, spender, token]);

  return {
    allowanceAmount: allowance,
    refresh: fetchAllowance,
  };
};

export default useErc20Allowance;

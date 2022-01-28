import { useCallback, useEffect, useState } from 'react';
import { Erc1155 } from 'src/contract/contracts/erc1155';
import { UseErc1155Allowance } from 'src/types/hooks/erc1155/use-erc1155-allowance';

const useErc1155Allowance = (
  token: Erc1155 | null,
  owner: string,
  operator: string
): UseErc1155Allowance => {
  const [allowance, setAllowance] = useState(false);

  const fetchAllowance = useCallback(async (): Promise<void> => {
    await token?.contract.isApprovedForAll(owner, operator).then((isApproved) => {
      setAllowance(isApproved);
    });
  }, [operator, owner, token?.contract]);

  // Fetch Allowance
  useEffect(() => {
    token && owner && operator && fetchAllowance();
  }, [owner, operator, token, fetchAllowance]);

  return {
    allowance,
    refresh: fetchAllowance,
  };
};

export default useErc1155Allowance;

import { useCallback, useEffect, useState } from 'react';
import { ERC721 } from 'src/contract/contracts/erc721';
import { UseErc721Allowance } from 'src/types/hooks/erc721/use-erc721-allowance';

const useErc721Allowance = (
  token: ERC721 | null,
  owner: string,
  operator: string
): UseErc721Allowance => {
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

export default useErc721Allowance;

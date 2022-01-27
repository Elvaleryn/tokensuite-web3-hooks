// Use Allowance Hook
export type UseErc20Allowance = {
  allowanceAmount: number;
  refresh: () => Promise<void>;
};

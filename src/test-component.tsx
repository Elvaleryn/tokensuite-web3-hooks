import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import useErc20 from './hooks/erc20/use-erc20';
import useErc20Allowance from './hooks/erc20/use-erc20-allowance';
import useErc20Approve from './hooks/erc20/use-erc20-approve';
import useProvider from './hooks/use-provider';
import { NetworkTypes } from './types/config';

const TestComponent = () => {
  const { activate, deactivate, account, library } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 56, 80001],
  });

  const ernAddress = '0xBBc2AE13b23d715c30720F079fcd9B4a74093505';

  // const ern = useErc20('')

  // const provider = useProvider('signer', library);
  // if (!provider) return <>hey</>;
  const ern = useErc20(ernAddress, 'signer', library);
  const allowance = useErc20Allowance(
    ern,
    account || '',
    '0xEdFE9aC42a511e1C523E067DB8345711419d4f14'
  );

  const approver = useErc20Approve();

  const handleApprove = async () => {
    const res = await approver.getApprove(
      ern,
      account || '',
      '0xEdFE9aC42a511e1C523E067DB8345711419d4f14',
      '10000000000000000000000000000000000000000'
    );
    console.log(res);
  };

  useEffect(() => {
    console.log(allowance.allowanceAmount);
  }, [ern, account]);

  return (
    <div>
      <button onClick={() => activate(injected)}>Connect</button>
      {account}
      <div className="App">sdkflasjdf</div>
      <button onClick={() => handleApprove()}>approve</button>
      <button onClick={() => deactivate()}>logout</button>
    </div>
  );
};

export default TestComponent;

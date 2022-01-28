import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import useErc1155 from './hooks/erc1155/use-erc1155';
import useErc1155Allowance from './hooks/erc1155/use-erc1155-allowance';
import useErc20 from './hooks/erc20/use-erc20';
import useErc20Allowance from './hooks/erc20/use-erc20-allowance';
import useProvider from './hooks/use-provider';
import { NetworkTypes } from './types/config';
import { getErc1155Approve } from './utils/approve/get-erc1155-approve';
import { getErc20Approve } from './utils/approve/get-erc20-approve';

const TestComponent = () => {
  const { activate, deactivate, account, library } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 56, 80001],
  });

  const ernAddress = '0xBBc2AE13b23d715c30720F079fcd9B4a74093505';
  const testErn = '0x3565b97c7d79d14e7aD083D8fCEbd0829D047507';

  // const ern = useErc20('')

  // const provider = useProvider('signer', library);
  // if (!provider) return <>hey</>;
  const ern = useErc20(testErn, 'signer', library);
  const erc1155 = useErc1155('0x72392b9f1865b1cdf8ba2d07ef69476a5d44e0bb', 'signer', library);

  const erc1155allowance = useErc1155Allowance(
    erc1155,
    account || '',
    '0xA9e5e5C7db014586d56Ce044A1B3Dc05026a8e22'
  );

  const allowance = useErc20Allowance(
    ern,
    account || '',
    '0xEdFE9aC42a511e1C523E067DB8345711419d4f14'
  );

  const handle1155approve = async () => {
    const res = await getErc1155Approve(
      erc1155,
      account || '',
      '0xEdFE9aC42a511e1C523E067DB8345711419d4f14'
    );
    console.log(res);
  };

  const handleApprove = async () => {
    const res = await getErc20Approve(
      ern,
      account || '',
      '0xc95fee5b68e2ce5b5897e7e65576131f0e9d2e53',
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
      <button onClick={() => handle1155approve()}>approve</button>
      <button onClick={() => deactivate()}>logout</button>
    </div>
  );
};

export default TestComponent;

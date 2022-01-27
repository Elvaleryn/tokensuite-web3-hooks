import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useState } from 'react';
import useErc20 from './hooks/erc20/use-erc20';
import useProvider from './hooks/use-provider';
import { NetworkTypes } from './types/config';

const TestComponent = () => {
	const { activate, deactivate, account, library } = useWeb3React();
	const injected = new InjectedConnector({
		supportedChainIds: [1, 4, 137, 56, 80001],
	});

	// const provider = useProvider('signer', library);
	// if (!provider) return <>hey</>;
	const ern = useErc20(
		'0xbbc2ae13b23d715c30720f079fcd9b4a74093505',
		'signer',
		library
	);
	return (
		<div>
			<button onClick={() => activate(injected)}>Connect</button>
			{account}
			<div className="App">sdkflasjdf</div>
			<button onClick={() => deactivate()}>logout</button>
		</div>
	);
};

export default TestComponent;

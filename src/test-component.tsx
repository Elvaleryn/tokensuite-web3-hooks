import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import useProvider from './hooks/use-provider';
import { NetworkTypes } from './types/config';

const TestComponent = () => {
	const { activate, deactivate, account, library } = useWeb3React();
	const injected = new InjectedConnector({
		supportedChainIds: [1, 4, 137, 56, 80001],
	});

	const provider = useProvider(NetworkTypes.BINANCE, library);

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

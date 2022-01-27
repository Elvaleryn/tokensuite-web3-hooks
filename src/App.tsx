import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import TestComponent from './test-component';

const App = () => {
	const getLibrary = (provider: any): ethers.providers.Web3Provider =>
		new ethers.providers.Web3Provider(provider);

	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<TestComponent />
		</Web3ReactProvider>
	);
};

export default App;

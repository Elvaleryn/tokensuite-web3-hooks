import { NetworkProviders } from 'src/types/config';

export const networkProviders: NetworkProviders = {
	/**
	 * Ethereum Http Provider
	 */
	ethereum: {
		/**
		 * Ethereum Network Name
		 */
		network: 'mainnet',

		/**
		 * Ethereum Network Key
		 */
		key: process.env.REACT_APP_ETHEREUM_PROVIDER_KEY || '',

		chainId: 1,

		chainIdHex: '0x1',
		rpcUrl: '',

	},

	/**i
	 * Polygon Http Provider
	 */
	polygon: {
		/**
		 * Polygon Network Name
		 */
		network: 'matic',

		/**
		 * Polygon Network Key
		 */
		key: process.env.REACT_APP_POLYGON_PROVIDER_KEY || '',

		chainId: 137,

		chainIdHex: '0x89',

		rpcUrl: '',
	},
	binance: {
		chainId: 56,
		network: 'binance',
		chainIdHex: '0x38',
		key: '',
		rpcUrl: 'https://bsc-dataseed.binance.org/',
	},
	rinkeby: {
		network: 'rinkeby',

		/**
		 * Polygon Network Key
		 */
		key: process.env.REACT_APP_RINKEBY_PROVIDER_KEY || '',

		chainId: 4,

		chainIdHex: '0x4',
		rpcUrl: '',

	},
	mumbai: {
		/**
		 * Polygon Network Name
		 */
		network: 'maticmum',

		/**
		 * Polygon Network Key
		 */
		key: process.env.REACT_APP_MUMBAI_PROVIDER_KEY || '',

		chainId: 80001,

		chainIdHex: '0x13881',
		rpcUrl: '',

	},
};

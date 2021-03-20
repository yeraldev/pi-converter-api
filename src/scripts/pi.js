const Web3 = require('web3');

const web3 = new Web3(
  'https://mainnet.infura.io/v3/f652140e1d67412cb85624d56edf9c1c'
);

const web3 = new Web3('https://connect.pichain.io');

const piABI = [
  {
    constant: true,
    inputs: [],
    name: 'getComposition',
    outputs: [
      { name: '', type: 'address[]' },
      { name: '', type: 'uint256[]' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'recalculate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'emisorTokenBalance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'tokenAddress', type: 'address' }],
    name: 'removeFromComposition',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'emisorAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'modifiedToken', type: 'address' },
      { name: 'tokenAmount', type: 'uint256' },
      { name: 'sign', type: 'bool' }
    ],
    name: 'modifyBalance',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'newTokenAddress', type: 'address' }],
    name: 'addToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'getEmisorBalances',
    outputs: [
      { name: '', type: 'address[]' },
      { name: '', type: 'uint256[]' }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
];

const pi = '0x0000000000000000000000000000000000000011';
const issuing = '0x0000000000000000000000000000000000000010';
const btc = '0x4c3c844b751c18299932dcd18a3032bd3481d61a';

const piContract = new web3.eth.Contract(piABI, pi);

const piValue = async () => {
  const piAmount = await piContract.methods.emisorTokenBalance(issuing).call();

  const btcAmount = await piContract.methods.emisorTokenBalance(btc).call();

  const value = parseFloat(btcAmount / piAmount).toFixed(8);

  return { piBtc: value };
};

module.export = piValue;

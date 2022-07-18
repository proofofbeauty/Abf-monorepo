/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../common';
import type {
  BrainFuckVM,
  BrainFuckVMInterface,
} from '../../contracts/BrainFuckVM';

const _abi = [
  {
    inputs: [],
    name: 'LOOPING_STACK_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TAPE_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'code',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'input',
        type: 'bytes',
      },
    ],
    name: 'run',
    outputs: [
      {
        internalType: 'bytes',
        name: 'out',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x610e5f610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806329b9e6a514610050578063e0006a6114610080578063ffec62f91461009e575b600080fd5b61006a60048036038101906100659190610ac6565b6100bc565b6040516100779190610bf3565b60405180910390f35b610088610a6f565b6040516100959190610c15565b60405180910390f35b6100a6610a75565b6040516100b39190610c15565b60405180910390f35b60606040518060200160405280600081525090506000622dc6c067ffffffffffffffff811115610115577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156101475781602001600182028036833780820191505090505b509050600080600080600061200067ffffffffffffffff811115610194577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101c25781602001602082028036833780820191505090505b5090506000805b8c8c9050811015610a5f5760008d8d8381811061020f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b905085156102b357605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561025e57848061025a90610d96565b9550505b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156102ae57600085141561029e57600095506102ad565b84806102a990610d6c565b9550505b5b610a4d565b602b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561043d5760ff60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916898881518110610341577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146103ce5760018988815181106103ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6103c69190610c57565b60f81b6103d4565b600060f81b5b89888151811061040d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105c757600060f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168988815181106104cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610558576001898881518110610538577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6105509190610cc2565b60f81b61055e565b60ff60f81b5b898881518110610597577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156106c4578b8b9050881061060957600060f81b61064d565b8b8b89818110610642577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b5b898881518110610686577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535087806106c090610d96565b9850505b602e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561075a578989888151811061072c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b604051602001610748929190610bcb565b60405160208183030381529060405299505b602160f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561078d57600096505b603e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107ca5786806107c690610d96565b9750505b603c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561080757868061080390610d6c565b9750505b605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561090557600060f81b898881518110610873577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108af5760019550610904565b818484815181106108e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050828061090090610d96565b9350505b5b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610a4c57600060f81b898881518110610971577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146109f757836001846109b19190610c8e565b815181106109e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150610a4b565b6000848480610a0590610d6c565b955081518110610a3e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505b5b5b5080610a5890610d96565b90506101c9565b5050505050505050949350505050565b61200081565b622dc6c081565b60008083601f840112610a8e57600080fd5b8235905067ffffffffffffffff811115610aa757600080fd5b602083019150836001820283011115610abf57600080fd5b9250929050565b60008060008060408587031215610adc57600080fd5b600085013567ffffffffffffffff811115610af657600080fd5b610b0287828801610a7c565b9450945050602085013567ffffffffffffffff811115610b2157600080fd5b610b2d87828801610a7c565b925092505092959194509250565b610b4c610b4782610cf6565b610ddf565b82525050565b6000610b5d82610c30565b610b678185610c3b565b9350610b77818560208601610d39565b610b8081610e18565b840191505092915050565b6000610b9682610c30565b610ba08185610c4c565b9350610bb0818560208601610d39565b80840191505092915050565b610bc581610d22565b82525050565b6000610bd78285610b8b565b9150610be38284610b3b565b6001820191508190509392505050565b60006020820190508181036000830152610c0d8184610b52565b905092915050565b6000602082019050610c2a6000830184610bbc565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610c6282610d2c565b9150610c6d83610d2c565b92508260ff03821115610c8357610c82610de9565b5b828201905092915050565b6000610c9982610d22565b9150610ca483610d22565b925082821015610cb757610cb6610de9565b5b828203905092915050565b6000610ccd82610d2c565b9150610cd883610d2c565b925082821015610ceb57610cea610de9565b5b828203905092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610d57578082015181840152602081019050610d3c565b83811115610d66576000848401525b50505050565b6000610d7782610d22565b91506000821415610d8b57610d8a610de9565b5b600182039050919050565b6000610da182610d22565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610dd457610dd3610de9565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220685728f5bbc1455f5dff8d81bd9f40e600436a26e4c640c3b1a7397c9d12fc4264736f6c63430008040033';

type BrainFuckVMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrainFuckVMConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrainFuckVM__factory extends ContractFactory {
  constructor(...args: BrainFuckVMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<BrainFuckVM> {
    return super.deploy(overrides || {}) as Promise<BrainFuckVM>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BrainFuckVM {
    return super.attach(address) as BrainFuckVM;
  }
  override connect(signer: Signer): BrainFuckVM__factory {
    return super.connect(signer) as BrainFuckVM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrainFuckVMInterface {
    return new utils.Interface(_abi) as BrainFuckVMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): BrainFuckVM {
    return new Contract(address, _abi, signerOrProvider) as BrainFuckVM;
  }
}

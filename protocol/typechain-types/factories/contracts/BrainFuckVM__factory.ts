/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  BrainFuckVM,
  BrainFuckVMInterface,
} from '../../contracts/BrainFuckVM';

const _abi = [
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
      {
        internalType: 'uint256',
        name: 'outSize',
        type: 'uint256',
      },
    ],
    name: 'runBrainFuckCode',
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
  '0x610caf610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80637e542c0a1461003a575b600080fd5b610054600480360381019061004f91906109c6565b61006a565b6040516100619190610a88565b60405180910390f35b60608167ffffffffffffffff8111156100ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156100de5781602001600182028036833780820191505090505b5090506000602067ffffffffffffffff811115610124577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156101565781602001600182028036833780820191505090505b50905060008060008060008061040467ffffffffffffffff8111156101a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101d25781602001602082028036833780820191505090505b5090506000805b8e8e90508110156109555760008f8f8381811061021f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b905085156102c357605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561026e57848061026a90610bd9565b9550505b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156102be5760008514156102ae57600095506102bd565b84806102b990610baf565b9550505b5b610943565b602b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156103b05760018a888151811061032c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6103449190610ac6565b60f81b8a8881518110610380577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561049d5760018a8881518110610419577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6104319190610b31565b60f81b8a888151811061046d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561059a578d8d905088106104df57600060f81b610523565b8d8d89818110610518577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b5b8a888151811061055c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350878061059690610bd9565b9850505b602e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561068357898781518110610601577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b8b8a81518110610645577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350888061067f90610bd9565b9950505b603e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156106c05786806106bc90610bd9565b9750505b603c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156106fd5786806106f990610baf565b9750505b605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107fb57600060f81b8a8881518110610769577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107a557600195506107fa565b818484815181106107df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505082806107f690610bd9565b9350505b5b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561094257600060f81b8a8881518110610867577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146108ed57836001846108a79190610afd565b815181106108de577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150610941565b60008484806108fb90610baf565b955081518110610934577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505b5b5b508061094e90610bd9565b90506101d9565b50505050505050505095945050505050565b60008083601f84011261097957600080fd5b8235905067ffffffffffffffff81111561099257600080fd5b6020830191508360018202830111156109aa57600080fd5b9250929050565b6000813590506109c081610c62565b92915050565b6000806000806000606086880312156109de57600080fd5b600086013567ffffffffffffffff8111156109f857600080fd5b610a0488828901610967565b9550955050602086013567ffffffffffffffff811115610a2357600080fd5b610a2f88828901610967565b93509350506040610a42888289016109b1565b9150509295509295909350565b6000610a5a82610aaa565b610a648185610ab5565b9350610a74818560208601610b7c565b610a7d81610c51565b840191505092915050565b60006020820190508181036000830152610aa28184610a4f565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000610ad182610b6f565b9150610adc83610b6f565b92508260ff03821115610af257610af1610c22565b5b828201905092915050565b6000610b0882610b65565b9150610b1383610b65565b925082821015610b2657610b25610c22565b5b828203905092915050565b6000610b3c82610b6f565b9150610b4783610b6f565b925082821015610b5a57610b59610c22565b5b828203905092915050565b6000819050919050565b600060ff82169050919050565b60005b83811015610b9a578082015181840152602081019050610b7f565b83811115610ba9576000848401525b50505050565b6000610bba82610b65565b91506000821415610bce57610bcd610c22565b5b600182039050919050565b6000610be482610b65565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c1757610c16610c22565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610c6b81610b65565b8114610c7657600080fd5b5056fea2646970667358221220f0be30d5c04782d3191314a9d661a6028ebff3e5136ffb4c306bc3ce3df84ae564736f6c63430008040033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<BrainFuckVM> {
    return super.deploy(overrides || {}) as Promise<BrainFuckVM>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
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
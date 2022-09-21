/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  AddressAndFeesSort,
  AddressAndFeesSortInterface,
} from '../../../contracts/libraries/AddressAndFeesSort';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint32[]',
        name: 'fees',
        type: 'uint32[]',
      },
    ],
    name: 'sort',
    outputs: [
      {
        internalType: 'address[]',
        name: 'sortedAccounts',
        type: 'address[]',
      },
      {
        internalType: 'uint32[]',
        name: 'sortedFees',
        type: 'uint32[]',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x610d71610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063894a35ca1461003a575b600080fd5b610054600480360381019061004f9190610828565b61006b565b60405161006292919061099e565b60405180910390f35b6060806000845167ffffffffffffffff8111156100b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156100df5781602001602082028036833780820191505090505b50905060005b855181101561019b57858181518110610127577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1682828151811061017e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508061019490610c26565b90506100e5565b506101b681856000600189516101b19190610b4b565b610305565b845167ffffffffffffffff8111156101f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156102255781602001602082028036833780820191505090505b50925060005b85518110156102f95785818151811061026d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518482815181106102ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806102f290610c26565b905061022b565b50839150509250929050565b600082905060008290508082141561031e5750506106cc565b6000866002868661032f9190610b4b565b6103399190610b1a565b866103449190610ac4565b8151811061037b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190505b81831161069e575b808784815181106103c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015110156103e95782806103e190610c26565b93505061038e565b5b868281518110610423577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181101561044557818061043d90610bcb565b9250506103ea565b81831161069957868281518110610485577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518784815181106104c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151888581518110610507577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101898581518110610547577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010182815250828152505050858281518110610591577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518684815181106105d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151878581518110610613577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101888581518110610653577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018263ffffffff1663ffffffff168152508263ffffffff1663ffffffff168152505050828061068790610c26565b935050818061069590610bcb565b9250505b610386565b818510156106b3576106b287878785610305565b5b838310156106c8576106c787878587610305565b5b5050505b50505050565b60006106e56106e0846109fa565b6109d5565b9050808382526020820190508285602086028201111561070457600080fd5b60005b85811015610734578161071a88826107aa565b845260208401935060208301925050600181019050610707565b5050509392505050565b600061075161074c84610a26565b6109d5565b9050808382526020820190508285602086028201111561077057600080fd5b60005b858110156107a057816107868882610813565b845260208401935060208301925050600181019050610773565b5050509392505050565b6000813590506107b981610d0d565b92915050565b600082601f8301126107d057600080fd5b81356107e08482602086016106d2565b91505092915050565b600082601f8301126107fa57600080fd5b813561080a84826020860161073e565b91505092915050565b60008135905061082281610d24565b92915050565b6000806040838503121561083b57600080fd5b600083013567ffffffffffffffff81111561085557600080fd5b610861858286016107bf565b925050602083013567ffffffffffffffff81111561087e57600080fd5b61088a858286016107e9565b9150509250929050565b60006108a083836108c4565b60208301905092915050565b60006108b8838361098f565b60208301905092915050565b6108cd81610b7f565b82525050565b60006108de82610a72565b6108e88185610aa2565b93506108f383610a52565b8060005b8381101561092457815161090b8882610894565b975061091683610a88565b9250506001810190506108f7565b5085935050505092915050565b600061093c82610a7d565b6109468185610ab3565b935061095183610a62565b8060005b8381101561098257815161096988826108ac565b975061097483610a95565b925050600181019050610955565b5085935050505092915050565b61099881610bbb565b82525050565b600060408201905081810360008301526109b881856108d3565b905081810360208301526109cc8184610931565b90509392505050565b60006109df6109f0565b90506109eb8282610bf5565b919050565b6000604051905090565b600067ffffffffffffffff821115610a1557610a14610ccd565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610a4157610a40610ccd565b5b602082029050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610acf82610bb1565b9150610ada83610bb1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b0f57610b0e610c6f565b5b828201905092915050565b6000610b2582610bb1565b9150610b3083610bb1565b925082610b4057610b3f610c9e565b5b828204905092915050565b6000610b5682610bb1565b9150610b6183610bb1565b925082821015610b7457610b73610c6f565b5b828203905092915050565b6000610b8a82610b91565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b6000610bd682610bb1565b91506000821415610bea57610be9610c6f565b5b600182039050919050565b610bfe82610cfc565b810181811067ffffffffffffffff82111715610c1d57610c1c610ccd565b5b80604052505050565b6000610c3182610bb1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c6457610c63610c6f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610d1681610b7f565b8114610d2157600080fd5b50565b610d2d81610bbb565b8114610d3857600080fd5b5056fea264697066735822122084ef93ef08c055d6286155434b52e02898326cdabb6925c54ceef9a45cd49c0764736f6c63430008040033';

type AddressAndFeesSortConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressAndFeesSortConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressAndFeesSort__factory extends ContractFactory {
  constructor(...args: AddressAndFeesSortConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<AddressAndFeesSort> {
    return super.deploy(overrides || {}) as Promise<AddressAndFeesSort>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AddressAndFeesSort {
    return super.attach(address) as AddressAndFeesSort;
  }
  override connect(signer: Signer): AddressAndFeesSort__factory {
    return super.connect(signer) as AddressAndFeesSort__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressAndFeesSortInterface {
    return new utils.Interface(_abi) as AddressAndFeesSortInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): AddressAndFeesSort {
    return new Contract(address, _abi, signerOrProvider) as AddressAndFeesSort;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  AdminEditableStorage,
  AdminEditableStorageInterface,
} from '../../../contracts/storage/AdminEditableStorage';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'editData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'indexToData',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_writer',
        type: 'address',
      },
    ],
    name: 'setWriter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'writer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610c448061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063453a2abc1161005b578063453a2abc14610125578063715018a6146101435780638da5cb5b1461014d578063f2fde38b1461016b57610088565b806301ffc9a71461008d57806318ed981a146100bd57806339e20523146100ed578063423aaf8114610109575b600080fd5b6100a760048036038101906100a2919061079a565b610187565b6040516100b4919061091f565b60405180910390f35b6100d760048036038101906100d291906107c3565b610201565b6040516100e4919061093a565b60405180910390f35b61010760048036038101906101029190610771565b6102a6565b005b610123600480360381019061011e91906107ec565b6102f2565b005b61012d6103aa565b60405161013a9190610904565b60405180910390f35b61014b6103d0565b005b6101556103e4565b6040516101629190610904565b60405180910390f35b61018560048036038101906101809190610771565b61040d565b005b60007f18ed981a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806101fa57506101f982610491565b5b9050919050565b606060026000838152602001908152602001600020805461022190610a90565b80601f016020809104026020016040519081016040528092919081815260200182805461024d90610a90565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b50505050509050919050565b6102ae6104fb565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610382576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103799061097c565b60405180910390fd5b81816002600086815260200190815260200160002091906103a4929190610645565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103d86104fb565b6103e26000610579565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104156104fb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047c9061095c565b60405180910390fd5b61048e81610579565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61050361063d565b73ffffffffffffffffffffffffffffffffffffffff166105216103e4565b73ffffffffffffffffffffffffffffffffffffffff1614610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056e9061099c565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b82805461065190610a90565b90600052602060002090601f01602090048101928261067357600085556106ba565b82601f1061068c57803560ff19168380011785556106ba565b828001600101855582156106ba579182015b828111156106b957823582559160200191906001019061069e565b5b5090506106c791906106cb565b5090565b5b808211156106e45760008160009055506001016106cc565b5090565b6000813590506106f781610bc9565b92915050565b60008135905061070c81610be0565b92915050565b60008083601f84011261072457600080fd5b8235905067ffffffffffffffff81111561073d57600080fd5b60208301915083600182028301111561075557600080fd5b9250929050565b60008135905061076b81610bf7565b92915050565b60006020828403121561078357600080fd5b6000610791848285016106e8565b91505092915050565b6000602082840312156107ac57600080fd5b60006107ba848285016106fd565b91505092915050565b6000602082840312156107d557600080fd5b60006107e38482850161075c565b91505092915050565b60008060006040848603121561080157600080fd5b600061080f8682870161075c565b935050602084013567ffffffffffffffff81111561082c57600080fd5b61083886828701610712565b92509250509250925092565b61084d816109e9565b82525050565b61085c816109fb565b82525050565b600061086d826109bc565b61087781856109c7565b9350610887818560208601610a5d565b61089081610af1565b840191505092915050565b60006108a86026836109d8565b91506108b382610b02565b604082019050919050565b60006108cb6037836109d8565b91506108d682610b51565b604082019050919050565b60006108ee6020836109d8565b91506108f982610ba0565b602082019050919050565b60006020820190506109196000830184610844565b92915050565b60006020820190506109346000830184610853565b92915050565b600060208201905081810360008301526109548184610862565b905092915050565b600060208201905081810360008301526109758161089b565b9050919050565b60006020820190508181036000830152610995816108be565b9050919050565b600060208201905081810360008301526109b5816108e1565b9050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109f482610a33565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610a7b578082015181840152602081019050610a60565b83811115610a8a576000848401525b50505050565b60006002820490506001821680610aa857607f821691505b60208210811415610abc57610abb610ac2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f41646d696e5772697461626c6553746f726167653a204f6e6c7920777269746560008201527f722063616e20777269746520746f2073746f726167652e000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610bd2816109e9565b8114610bdd57600080fd5b50565b610be981610a07565b8114610bf457600080fd5b50565b610c0081610a53565b8114610c0b57600080fd5b5056fea26469706673582212202b3ed388f5edfcb61d45981b2480fa02755fcbe4959122573fbaea590d5c1b1a64736f6c63430008040033';

type AdminEditableStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminEditableStorageConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdminEditableStorage__factory extends ContractFactory {
  constructor(...args: AdminEditableStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<AdminEditableStorage> {
    return super.deploy(overrides || {}) as Promise<AdminEditableStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AdminEditableStorage {
    return super.attach(address) as AdminEditableStorage;
  }
  override connect(signer: Signer): AdminEditableStorage__factory {
    return super.connect(signer) as AdminEditableStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminEditableStorageInterface {
    return new utils.Interface(_abi) as AdminEditableStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): AdminEditableStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as AdminEditableStorage;
  }
}

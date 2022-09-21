/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  RendererRegistry,
  RendererRegistryInterface,
} from '../../../contracts/registries/RendererRegistry';

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
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'renderer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'propsSize',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'additionalMetadataURI',
        type: 'string',
      },
    ],
    name: 'RegisteredRenderer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'addressToId',
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
        internalType: 'string',
        name: 'packageName',
        type: 'string',
      },
    ],
    name: 'createPackage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'packageName',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: 'names',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'editPackageByNamesAndIds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'packageName',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: 'names',
        type: 'string[]',
      },
      {
        internalType: 'address[]',
        name: 'renderers',
        type: 'address[]',
      },
    ],
    name: 'editPackageByNamesAndRenderers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'packageName',
        type: 'string',
      },
      {
        internalType: 'address[]',
        name: 'renderers',
        type: 'address[]',
      },
    ],
    name: 'editPackageByRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_oldRenderer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_renderer',
        type: 'address',
      },
    ],
    name: 'editRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'idCounter',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'idToAddress',
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
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'packageManager',
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
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'packages',
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
        internalType: 'address',
        name: '_renderer',
        type: 'address',
      },
    ],
    name: 'registerRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'packageName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'newManager',
        type: 'address',
      },
    ],
    name: 'transferPackageManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600060045534801561001557600080fd5b5061252b806100256000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063cb0e0d7d11610071578063cb0e0d7d1461019d578063ce6dabd6146101cd578063e358c09a146101e9578063e4e1b28c14610205578063e71d591114610221578063eb08ab281461023d576100b4565b806319a84d46146100b95780632a2d0c47146100d5578063435f9d5414610105578063626f461e146101355780637473397914610165578063c4a0d46514610181575b600080fd5b6100d360048036038101906100ce91906119c1565b61025b565b005b6100ef60048036038101906100ea9190611caf565b61036d565b6040516100fc9190611f05565b60405180910390f35b61011f600480360381019061011a9190611bc1565b6103a0565b60405161012c9190611f05565b60405180910390f35b61014f600480360381019061014a9190611c43565b6103e9565b60405161015c919061203b565b60405180910390f35b61017f600480360381019061017a9190611a19565b61043a565b005b61019b600480360381019061019691906118c5565b6107d2565b005b6101b760048036038101906101b291906118c5565b610b33565b6040516101c4919061203b565b60405180910390f35b6101e760048036038101906101e29190611a89565b610b4b565b005b61020360048036038101906101fe9190611b25565b610da7565b005b61021f600480360381019061021a919061197c565b610eab565b005b61023b60048036038101906102369190611917565b610fbd565b005b61024561147b565b604051610252919061203b565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff1660038484604051610284929190611ed5565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030090611f9b565b60405180910390fd5b806003848460405161031c929190611ed5565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028280516020810182018051848252602083016020850120818352809550505050505081805160208101820180518482526020830160208501208183528095505050505050600091509150505481565b3373ffffffffffffffffffffffffffffffffffffffff1660038484604051610463929190611ed5565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104df90611f9b565b60405180910390fd5b6000815167ffffffffffffffff81111561052b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156105595781602001602082028036833780820191505090505b5090506000825167ffffffffffffffff81111561059f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156105d257816020015b60608152602001906001900390816105bd5790505b50905060005b82518110156107be576001600085838151811061061e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483828151811061069a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508381815181106106df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561072c57600080fd5b505afa158015610740573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107699190611c02565b8282815181106107a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250806107b79061228a565b90506105d8565b506107cb85858385611481565b5050505050565b600460008154809291906107e59061228a565b919050555060008190508073ffffffffffffffffffffffffffffffffffffffff166301ffc9a77fea0d9bea000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016108489190611f20565b60206040518083038186803b15801561086057600080fd5b505afa158015610874573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108989190611953565b6108d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ce90611fbb565b60405180910390fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610959576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095090611f7b565b60405180910390fd5b81600080600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600454600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fc8bbcdadf3f0a000675aa840866e67b2908a640facd90e202c0eecf51d4dd7d1600454838373ffffffffffffffffffffffffffffffffffffffff1662a85d696040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5c57600080fd5b505afa158015610a70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a949190611cd8565b8473ffffffffffffffffffffffffffffffffffffffff166392348b226040518163ffffffff1660e01b815260040160006040518083038186803b158015610ada57600080fd5b505afa158015610aee573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b179190611c02565b604051610b279493929190612056565b60405180910390a15050565b60016020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff1660038585604051610b74929190611ed5565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610bf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf090611f9b565b60405180910390fd5b8051825114610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c349061201b565b60405180910390fd5b6000815167ffffffffffffffff811115610c80577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610cae5781602001602082028036833780820191505090505b50905060005b8151811015610d935760016000848381518110610cfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054828281518110610d76577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080610d8c9061228a565b9050610cb4565b50610da085858584611481565b5050505050565b3373ffffffffffffffffffffffffffffffffffffffff1660038585604051610dd0929190611ed5565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4c90611f9b565b60405180910390fd5b8051825114610e99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e909061201b565b60405180910390fd5b610ea584848484611481565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff1660038383604051610ed5929190611ed5565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5190611ffb565b60405180910390fd5b3360038383604051610f6d929190611ed5565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008290503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561101f57600080fd5b505afa158015611033573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105791906118ee565b73ffffffffffffffffffffffffffffffffffffffff16146110ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a490611f3b565b60405180910390fd5b60008290506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081141561113a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113190611f5b565b60405180910390fd5b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146111bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b390611fdb565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166301ffc9a77fea0d9bea000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016112159190611f20565b60206040518083038186803b15801561122d57600080fd5b505afa158015611241573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112659190611953565b6112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129b90611fbb565b60405180910390fd5b8360008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fc8bbcdadf3f0a000675aa840866e67b2908a640facd90e202c0eecf51d4dd7d181858473ffffffffffffffffffffffffffffffffffffffff1662a85d696040518163ffffffff1660e01b815260040160206040518083038186803b1580156113a157600080fd5b505afa1580156113b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d99190611cd8565b8573ffffffffffffffffffffffffffffffffffffffff166392348b226040518163ffffffff1660e01b815260040160006040518083038186803b15801561141f57600080fd5b505afa158015611433573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061145c9190611c02565b60405161146c9493929190612056565b60405180910390a15050505050565b60045481565b60005b825181101561155f578181815181106114c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600286866040516114e0929190611ed5565b9081526020016040518091039020848381518110611527577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160405161153c9190611eee565b908152602001604051809103902081905550806115589061228a565b9050611484565b5050505050565b6000611579611574846120c7565b6120a2565b9050808382526020820190508285602086028201111561159857600080fd5b60005b858110156115c857816115ae8882611740565b84526020840193506020830192505060018101905061159b565b5050509392505050565b60006115e56115e0846120f3565b6120a2565b9050808382526020820190508285602086028201111561160457600080fd5b60005b8581101561164e57813567ffffffffffffffff81111561162657600080fd5b8086016116338982611847565b85526020850194506020840193505050600181019050611607565b5050509392505050565b600061166b6116668461211f565b6120a2565b9050808382526020820190508285602086028201111561168a57600080fd5b60005b858110156116ba57816116a0888261189b565b84526020840193506020830192505060018101905061168d565b5050509392505050565b60006116d76116d28461214b565b6120a2565b9050828152602081018484840111156116ef57600080fd5b6116fa848285612217565b509392505050565b60006117156117108461214b565b6120a2565b90508281526020810184848401111561172d57600080fd5b611738848285612226565b509392505050565b60008135905061174f816124b0565b92915050565b600081519050611764816124b0565b92915050565b600082601f83011261177b57600080fd5b813561178b848260208601611566565b91505092915050565b600082601f8301126117a557600080fd5b81356117b58482602086016115d2565b91505092915050565b600082601f8301126117cf57600080fd5b81356117df848260208601611658565b91505092915050565b6000815190506117f7816124c7565b92915050565b60008083601f84011261180f57600080fd5b8235905067ffffffffffffffff81111561182857600080fd5b60208301915083600182028301111561184057600080fd5b9250929050565b600082601f83011261185857600080fd5b81356118688482602086016116c4565b91505092915050565b600082601f83011261188257600080fd5b8151611892848260208601611702565b91505092915050565b6000813590506118aa816124de565b92915050565b6000815190506118bf816124de565b92915050565b6000602082840312156118d757600080fd5b60006118e584828501611740565b91505092915050565b60006020828403121561190057600080fd5b600061190e84828501611755565b91505092915050565b6000806040838503121561192a57600080fd5b600061193885828601611740565b925050602061194985828601611740565b9150509250929050565b60006020828403121561196557600080fd5b6000611973848285016117e8565b91505092915050565b6000806020838503121561198f57600080fd5b600083013567ffffffffffffffff8111156119a957600080fd5b6119b5858286016117fd565b92509250509250929050565b6000806000604084860312156119d657600080fd5b600084013567ffffffffffffffff8111156119f057600080fd5b6119fc868287016117fd565b93509350506020611a0f86828701611740565b9150509250925092565b600080600060408486031215611a2e57600080fd5b600084013567ffffffffffffffff811115611a4857600080fd5b611a54868287016117fd565b9350935050602084013567ffffffffffffffff811115611a7357600080fd5b611a7f8682870161176a565b9150509250925092565b60008060008060608587031215611a9f57600080fd5b600085013567ffffffffffffffff811115611ab957600080fd5b611ac5878288016117fd565b9450945050602085013567ffffffffffffffff811115611ae457600080fd5b611af087828801611794565b925050604085013567ffffffffffffffff811115611b0d57600080fd5b611b198782880161176a565b91505092959194509250565b60008060008060608587031215611b3b57600080fd5b600085013567ffffffffffffffff811115611b5557600080fd5b611b61878288016117fd565b9450945050602085013567ffffffffffffffff811115611b8057600080fd5b611b8c87828801611794565b925050604085013567ffffffffffffffff811115611ba957600080fd5b611bb5878288016117be565b91505092959194509250565b600060208284031215611bd357600080fd5b600082013567ffffffffffffffff811115611bed57600080fd5b611bf984828501611847565b91505092915050565b600060208284031215611c1457600080fd5b600082015167ffffffffffffffff811115611c2e57600080fd5b611c3a84828501611871565b91505092915050565b60008060408385031215611c5657600080fd5b600083013567ffffffffffffffff811115611c7057600080fd5b611c7c85828601611847565b925050602083013567ffffffffffffffff811115611c9957600080fd5b611ca585828601611847565b9150509250929050565b600060208284031215611cc157600080fd5b6000611ccf8482850161189b565b91505092915050565b600060208284031215611cea57600080fd5b6000611cf8848285016118b0565b91505092915050565b611d0a816121a3565b82525050565b611d19816121c1565b82525050565b6000611d2b8385612198565b9350611d38838584612217565b82840190509392505050565b6000611d4f8261217c565b611d598185612187565b9350611d69818560208601612226565b611d7281612331565b840191505092915050565b6000611d888261217c565b611d928185612198565b9350611da2818560208601612226565b80840191505092915050565b6000611dbb601983612187565b9150611dc682612342565b602082019050919050565b6000611dde601c83612187565b9150611de98261236b565b602082019050919050565b6000611e01601283612187565b9150611e0c82612394565b602082019050919050565b6000611e24602183612187565b9150611e2f826123bd565b604082019050919050565b6000611e47602083612187565b9150611e528261240c565b602082019050919050565b6000611e6a601f83612187565b9150611e7582612435565b602082019050919050565b6000611e8d600f83612187565b9150611e988261245e565b602082019050919050565b6000611eb0601a83612187565b9150611ebb82612487565b602082019050919050565b611ecf8161220d565b82525050565b6000611ee2828486611d1f565b91508190509392505050565b6000611efa8284611d7d565b915081905092915050565b6000602082019050611f1a6000830184611d01565b92915050565b6000602082019050611f356000830184611d10565b92915050565b60006020820190508181036000830152611f5481611dae565b9050919050565b60006020820190508181036000830152611f7481611dd1565b9050919050565b60006020820190508181036000830152611f9481611df4565b9050919050565b60006020820190508181036000830152611fb481611e17565b9050919050565b60006020820190508181036000830152611fd481611e3a565b9050919050565b60006020820190508181036000830152611ff481611e5d565b9050919050565b6000602082019050818103600083015261201481611e80565b9050919050565b6000602082019050818103600083015261203481611ea3565b9050919050565b60006020820190506120506000830184611ec6565b92915050565b600060808201905061206b6000830187611ec6565b6120786020830186611d01565b6120856040830185611ec6565b81810360608301526120978184611d44565b905095945050505050565b60006120ac6120bd565b90506120b88282612259565b919050565b6000604051905090565b600067ffffffffffffffff8211156120e2576120e1612302565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561210e5761210d612302565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561213a57612139612302565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561216657612165612302565b5b61216f82612331565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006121ae826121ed565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612244578082015181840152602081019050612229565b83811115612253576000848401525b50505050565b61226282612331565b810181811067ffffffffffffffff8211171561228157612280612302565b5b80604052505050565b60006122958261220d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122c8576122c76122d3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e6f74206f776e6572206f66206f6c642072656e646572657200000000000000600082015250565b7f4f6c642072656e6465726572206e6f7420726567697374657265642e00000000600082015250565b7f416c726561647920726567697374657265640000000000000000000000000000600082015250565b7f4f6e6c792063757272656e74206d616e616765722063616e207472616e73666560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f446f6573206e6f7420616269646520746f204952656e64657265722073706563600082015250565b7f4e65772072656e646572657220616c7265616479207265676973746572656400600082015250565b7f416c726561647920637265617465640000000000000000000000000000000000600082015250565b7f4e616d6573202b2049647320617265206d69736d617463686564000000000000600082015250565b6124b9816121a3565b81146124c457600080fd5b50565b6124d0816121b5565b81146124db57600080fd5b50565b6124e78161220d565b81146124f257600080fd5b5056fea2646970667358221220cb743cce0d9e4ed5b1b61a46ceff103452a53352ee3fe2760aa12698b40d6d3e64736f6c63430008040033';

type RendererRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RendererRegistryConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RendererRegistry__factory extends ContractFactory {
  constructor(...args: RendererRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<RendererRegistry> {
    return super.deploy(overrides || {}) as Promise<RendererRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RendererRegistry {
    return super.attach(address) as RendererRegistry;
  }
  override connect(signer: Signer): RendererRegistry__factory {
    return super.connect(signer) as RendererRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RendererRegistryInterface {
    return new utils.Interface(_abi) as RendererRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): RendererRegistry {
    return new Contract(address, _abi, signerOrProvider) as RendererRegistry;
  }
}

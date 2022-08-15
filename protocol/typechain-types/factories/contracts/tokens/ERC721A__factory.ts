/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721A,
  ERC721AInterface,
} from "../../../contracts/tokens/ERC721A";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001f61002a60201b60201c565b60008190555061002f565b600090565b6120148061003e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025d578063b88d4fde14610279578063c87b56dd14610295578063e985e9c5146102c5576100ea565b80636352211e146101df57806370a082311461020f57806395d89b411461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806318160ddd1461018957806323b872dd146101a757806342842e0e146101c3576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906119a0565b6102f5565b6040516101169190611b76565b60405180910390f35b6101276103d7565b6040516101349190611b91565b60405180910390f35b610157600480360381019061015291906119f2565b610469565b6040516101649190611b0f565b60405180910390f35b61018760048036038101906101829190611964565b6104e5565b005b6101916105f0565b60405161019e9190611bb3565b60405180910390f35b6101c160048036038101906101bc919061185e565b610607565b005b6101dd60048036038101906101d8919061185e565b610617565b005b6101f960048036038101906101f491906119f2565b610637565b6040516102069190611b0f565b60405180910390f35b610229600480360381019061022491906117f9565b61064d565b6040516102369190611bb3565b60405180910390f35b61024761071d565b6040516102549190611b91565b60405180910390f35b61027760048036038101906102729190611928565b6107af565b005b610293600480360381019061028e91906118ad565b610927565b005b6102af60048036038101906102aa91906119f2565b6109a3565b6040516102bc9190611b91565b60405180910390f35b6102df60048036038101906102da9190611822565b610a42565b6040516102ec9190611b76565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103d057506103cf82610ad6565b5b9050919050565b6060600280546103e690611dd8565b80601f016020809104026020016040519081016040528092919081815260200182805461041290611dd8565b801561045f5780601f106104345761010080835404028352916020019161045f565b820191906000526020600020905b81548152906001019060200180831161044257829003601f168201915b5050505050905090565b600061047482610b40565b6104aa576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f082610637565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610558576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610577610b8e565b73ffffffffffffffffffffffffffffffffffffffff16141580156105a957506105a7816105a2610b8e565b610a42565b155b156105e0576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105eb838383610b96565b505050565b60006105fa610c48565b6001546000540303905090565b610612838383610c4d565b505050565b61063283838360405180602001604052806000815250610927565b505050565b600061064282611103565b600001519050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106b5576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b60606003805461072c90611dd8565b80601f016020809104026020016040519081016040528092919081815260200182805461075890611dd8565b80156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b6107b7610b8e565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561081c576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060076000610829610b8e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166108d6610b8e565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161091b9190611b76565b60405180910390a35050565b610932848484610c4d565b6109518373ffffffffffffffffffffffffffffffffffffffff16611392565b80156109665750610964848484846113b5565b155b1561099d576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606109ae82610b40565b6109e4576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109ee611515565b9050600081511415610a0f5760405180602001604052806000815250610a3a565b80610a198461152c565b604051602001610a2a929190611aeb565b6040516020818303038152906040525b915050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600081610b4b610c48565b11158015610b5a575060005482105b8015610b87575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b600033905090565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600090565b6000610c5882611103565b90508373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614610cc3576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff16610ce4610b8e565b73ffffffffffffffffffffffffffffffffffffffff161480610d135750610d1285610d0d610b8e565b610a42565b5b80610d585750610d21610b8e565b73ffffffffffffffffffffffffffffffffffffffff16610d4084610469565b73ffffffffffffffffffffffffffffffffffffffff16145b905080610d91576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610df8576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0585858560016116d9565b610e1160008487610b96565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008581526020019081526020016000209050848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060006001850190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561109157600054821461109057878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b505050828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110fc85858560016116df565b5050505050565b61110b6116e5565b600082905080611119610c48565b11158015611128575060005481105b1561135b576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050806040015161135957600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461123d57809250505061138d565b5b60011561135857818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461135357809250505061138d565b61123e565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026113db610b8e565b8786866040518563ffffffff1660e01b81526004016113fd9493929190611b2a565b602060405180830381600087803b15801561141757600080fd5b505af192505050801561144857506040513d601f19601f8201168201806040525081019061144591906119c9565b60015b6114c2573d8060008114611478576040519150601f19603f3d011682016040523d82523d6000602084013e61147d565b606091505b506000815114156114ba576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b606060405180602001604052806000815250905090565b60606000821415611574576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116d4565b600082905060005b600082146115a657808061158f90611e3b565b915050600a8261159f9190611cbd565b915061157c565b60008167ffffffffffffffff8111156115e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561161a5781602001600182028036833780820191505090505b5090505b600085146116cd576001826116339190611cee565b9150600a856116429190611e84565b603061164e9190611c67565b60f81b81838151811061168a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116c69190611cbd565b945061161e565b8093505050505b919050565b50505050565b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b600061173b61173684611bf3565b611bce565b90508281526020810184848401111561175357600080fd5b61175e848285611d96565b509392505050565b60008135905061177581611f82565b92915050565b60008135905061178a81611f99565b92915050565b60008135905061179f81611fb0565b92915050565b6000815190506117b481611fb0565b92915050565b600082601f8301126117cb57600080fd5b81356117db848260208601611728565b91505092915050565b6000813590506117f381611fc7565b92915050565b60006020828403121561180b57600080fd5b600061181984828501611766565b91505092915050565b6000806040838503121561183557600080fd5b600061184385828601611766565b925050602061185485828601611766565b9150509250929050565b60008060006060848603121561187357600080fd5b600061188186828701611766565b935050602061189286828701611766565b92505060406118a3868287016117e4565b9150509250925092565b600080600080608085870312156118c357600080fd5b60006118d187828801611766565b94505060206118e287828801611766565b93505060406118f3878288016117e4565b925050606085013567ffffffffffffffff81111561191057600080fd5b61191c878288016117ba565b91505092959194509250565b6000806040838503121561193b57600080fd5b600061194985828601611766565b925050602061195a8582860161177b565b9150509250929050565b6000806040838503121561197757600080fd5b600061198585828601611766565b9250506020611996858286016117e4565b9150509250929050565b6000602082840312156119b257600080fd5b60006119c084828501611790565b91505092915050565b6000602082840312156119db57600080fd5b60006119e9848285016117a5565b91505092915050565b600060208284031215611a0457600080fd5b6000611a12848285016117e4565b91505092915050565b611a2481611d22565b82525050565b611a3381611d34565b82525050565b6000611a4482611c24565b611a4e8185611c3a565b9350611a5e818560208601611da5565b611a6781611f71565b840191505092915050565b6000611a7d82611c2f565b611a878185611c4b565b9350611a97818560208601611da5565b611aa081611f71565b840191505092915050565b6000611ab682611c2f565b611ac08185611c5c565b9350611ad0818560208601611da5565b80840191505092915050565b611ae581611d8c565b82525050565b6000611af78285611aab565b9150611b038284611aab565b91508190509392505050565b6000602082019050611b246000830184611a1b565b92915050565b6000608082019050611b3f6000830187611a1b565b611b4c6020830186611a1b565b611b596040830185611adc565b8181036060830152611b6b8184611a39565b905095945050505050565b6000602082019050611b8b6000830184611a2a565b92915050565b60006020820190508181036000830152611bab8184611a72565b905092915050565b6000602082019050611bc86000830184611adc565b92915050565b6000611bd8611be9565b9050611be48282611e0a565b919050565b6000604051905090565b600067ffffffffffffffff821115611c0e57611c0d611f42565b5b611c1782611f71565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c7282611d8c565b9150611c7d83611d8c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cb257611cb1611eb5565b5b828201905092915050565b6000611cc882611d8c565b9150611cd383611d8c565b925082611ce357611ce2611ee4565b5b828204905092915050565b6000611cf982611d8c565b9150611d0483611d8c565b925082821015611d1757611d16611eb5565b5b828203905092915050565b6000611d2d82611d6c565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611dc3578082015181840152602081019050611da8565b83811115611dd2576000848401525b50505050565b60006002820490506001821680611df057607f821691505b60208210811415611e0457611e03611f13565b5b50919050565b611e1382611f71565b810181811067ffffffffffffffff82111715611e3257611e31611f42565b5b80604052505050565b6000611e4682611d8c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e7957611e78611eb5565b5b600182019050919050565b6000611e8f82611d8c565b9150611e9a83611d8c565b925082611eaa57611ea9611ee4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611f8b81611d22565b8114611f9657600080fd5b50565b611fa281611d34565b8114611fad57600080fd5b50565b611fb981611d40565b8114611fc457600080fd5b50565b611fd081611d8c565b8114611fdb57600080fd5b5056fea26469706673582212204cf377bde4ee0b7112f35d9724f2a6d660020d54586e2f0756e05681551dc2c964736f6c63430008040033";

type ERC721AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721A__factory extends ContractFactory {
  constructor(...args: ERC721AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721A> {
    return super.deploy(overrides || {}) as Promise<ERC721A>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  override connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}

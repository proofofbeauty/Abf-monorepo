"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedGifImageRenderer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "APPLICATION_EXTENSION",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "GIF_89_A",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "GRAPHIC_CONTROL_EXTENSION",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "HEIGHT_INDEX",
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
        inputs: [],
        name: "IMAGE_DATA_CHUNK_SIZE",
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
        inputs: [],
        name: "IMAGE_DESCRIPTOR",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NUM_COLORS_INDEX",
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
        inputs: [],
        name: "WIDTH_INDEX",
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
        inputs: [],
        name: "additionalMetadataURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "imageDescriptor",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "getImageData",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
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
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        inputs: [],
        name: "propsSize",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "render",
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
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "renderRaw",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renderType",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
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
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052607e60015560006002556001600355600260045534801561002457600080fd5b5061004161003661004660201b60201c565b61004e60201b60201c565b610112565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61221e80620001226000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80636e266add116100ad5780639f3ab490116100715780639f3ab490146102fd578063a45433211461031b578063c8fb61e914610339578063d6ac743414610357578063f2fde38b1461037557610120565b80636e266add1461027b578063715018a61461029957806381612ceb146102a35780638da5cb5b146102c157806392348b22146102df57610120565b8063226aa217116100f4578063226aa217146101c15780632507de41146101df578063316df61e146101fd57806336d256be1461022d57806343c5820c1461024b57610120565b8062a85d691461012557806301ffc9a71461014357806306fdde03146101735780631762ca4a14610191575b600080fd5b61012d610391565b60405161013a9190611b0b565b60405180910390f35b61015d60048036038101906101589190611495565b6103b9565b60405161016a9190611a4c565b60405180910390f35b61017b610433565b6040516101889190611a89565b60405180910390f35b6101ab60048036038101906101a69190611503565b610470565b6040516101b89190611a67565b60405180910390f35b6101c96105d7565b6040516101d69190611b0b565b60405180910390f35b6101e76105dd565b6040516101f49190611b0b565b60405180910390f35b610217600480360381019061021291906114be565b6105e3565b6040516102249190611a89565b60405180910390f35b61023561061e565b6040516102429190611a67565b60405180910390f35b610265600480360381019061026091906114be565b610657565b6040516102729190611a67565b60405180910390f35b6102836108f2565b6040516102909190611a67565b60405180910390f35b6102a161092b565b005b6102ab61093f565b6040516102b89190611a89565b60405180910390f35b6102c961097c565b6040516102d69190611a31565b60405180910390f35b6102e761098b565b6040516102f49190611a89565b60405180910390f35b6103056109ab565b6040516103129190611b0b565b60405180910390f35b6103236109b1565b6040516103309190611a67565b60405180910390f35b6103416109ea565b60405161034e9190611a67565b60405180910390f35b61035f610a23565b60405161036c9190611b0b565b60405180910390f35b61038f600480360381019061038a919061146c565b610a29565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042c575061042b82610aad565b5b9050919050565b60606040518060400160405280600f81526020017f4d756c7469204672616d65206769660000000000000000000000000000000000815250905090565b6060600060405180602001604052806000815250905060005b84849050811015610573576000600154826104a49190611bfd565b905060008686905082119050600087878590846104c157856104c6565b8a8a90505b926104d393929190611bca565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090508482610525576001610528565b60025b60ff1682516105379190611bfd565b8260405160200161054a93929190611982565b60405160208183030381529060405294505050506001548161056c9190611bfd565b9050610489565b506040518060400160405280600881526020017f21f904090a00000000000000000000000000000000000000000000000000000081525085826040516020016105be93929190611946565b6040516020818303038152906040529150509392505050565b60045481565b60035481565b60606105f76105f28484610657565b610b17565b6040516020016106079190611a0f565b604051602081830303815290604052905092915050565b6040518060400160405280600681526020017f474946383961000000000000000000000000000000000000000000000000000081525081565b606060008383600354818110610696577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff1684846002548181106106e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff166106fb9190611cbb565b905060006107098585610ca1565b905060006040518060200160405280600081525090506000806003888860045481811061075f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c6107769190611d15565b60036107829190611c53565b60ff1690505b8787905081101561087857600085826107a19190611bfd565b90506000898990508211905060008a8a8590846107be57856107c3565b8d8d90505b926107d093929190611bca565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090508051856108229190611bfd565b945085610840888d8d8890889261083b93929190611bca565b610470565b6040516020016108519291906118d9565b604051602081830303815290604052955050505084816108719190611bfd565b9050610788565b506108838787610d55565b61088d8888610e9d565b6040518060400160405280601381526020017f21ff0b4e45545343415045322e300301ffff0000000000000000000000000000815250846040516020016108d794939291906118fd565b60405160208183030381529060405294505050505092915050565b6040518060400160405280600b81526020017f2c0000000080008000000700000000000000000000000000000000000000000081525081565b610933610fea565b61093d6000611068565b565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b600061098661112c565b905090565b60606040518060800160405280604281526020016121a760429139905090565b60015481565b6040518060400160405280600881526020017f21f904090a00000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280601381526020017f21ff0b4e45545343415045322e300301ffff000000000000000000000000000081525081565b60025481565b610a31610fea565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610aa1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9890611aab565b60405180910390fd5b610aaa81611068565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610b3a57604051806020016040528060008152509050610c9c565b60006040518060600160405280604081526020016121676040913990506000600360028551610b699190611bfd565b610b739190611c8a565b6004610b7f9190611cbb565b67ffffffffffffffff811115610bbe577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610bf05781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610c5c576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610c01565b5050600386510660018114610c785760028114610c8b57610c93565b603d6001830353603d6002830353610c93565b603d60018303535b50505080925050505b919050565b60608282600254818110610cde577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8383600354818110610d23577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b604051602001610d3e9291906119c2565b604051602081830303815290604052905092915050565b60606040518060400160405280600681526020017f47494638396100000000000000000000000000000000000000000000000000008152508383600254818110610dc8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8484600354818110610e0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b610e7360018787600454818110610e57577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c610e6e9190611c53565b611155565b604051602001610e86949392919061186e565b604051602081830303815290604052905092915050565b606060008383600454818110610edc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c9050600060038260ff16610f08600185610f039190611c53565b6112fe565b610f129190611d50565b610f1c9190611cbb565b67ffffffffffffffff811115610f5b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f8d5781602001600182028036833780820191505090505b5090508484600390600385610fa29190611d15565b6003610fae9190611c53565b60ff1692610fbe93929190611bca565b82604051602001610fd193929190611848565b6040516020818303038152906040529250505092915050565b610ff2611388565b73ffffffffffffffffffffffffffffffffffffffff1661101061097c565b73ffffffffffffffffffffffffffffffffffffffff1614611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105d90611acb565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060808260ff161061119d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119490611aeb565b60405180910390fd5b60408260ff1611156111d1577ff60000000000000000000000000000000000000000000000000000000000000090506112f9565b60208260ff161115611205577ff50000000000000000000000000000000000000000000000000000000000000090506112f9565b60108260ff161115611239577ff40000000000000000000000000000000000000000000000000000000000000090506112f9565b60088260ff16111561126d577ff30000000000000000000000000000000000000000000000000000000000000090506112f9565b60048260ff1611156112a1577ff20000000000000000000000000000000000000000000000000000000000000090506112f9565b60028260ff1611156112d5577ff10000000000000000000000000000000000000000000000000000000000000090506112f9565b7ff00000000000000000000000000000000000000000000000000000000000000090505b919050565b600060408260ff1611156113155760809050611383565b60208260ff16111561132a5760409050611383565b60108260ff16111561133f5760209050611383565b60088260ff1611156113545760109050611383565b60048260ff1611156113695760089050611383565b60028260ff16111561137e5760049050611383565b600290505b919050565b600033905090565b60006113a361139e84611b4b565b611b26565b9050828152602081018484840111156113bb57600080fd5b6113c6848285611e31565b509392505050565b6000813590506113dd81612138565b92915050565b6000813590506113f28161214f565b92915050565b60008083601f84011261140a57600080fd5b8235905067ffffffffffffffff81111561142357600080fd5b60208301915083600182028301111561143b57600080fd5b9250929050565b600082601f83011261145357600080fd5b8135611463848260208601611390565b91505092915050565b60006020828403121561147e57600080fd5b600061148c848285016113ce565b91505092915050565b6000602082840312156114a757600080fd5b60006114b5848285016113e3565b91505092915050565b600080602083850312156114d157600080fd5b600083013567ffffffffffffffff8111156114eb57600080fd5b6114f7858286016113f8565b92509250509250929050565b60008060006040848603121561151857600080fd5b600084013567ffffffffffffffff81111561153257600080fd5b61153e86828701611442565b935050602084013567ffffffffffffffff81111561155b57600080fd5b611567868287016113f8565b92509250509250925092565b61157c81611d84565b82525050565b61158b81611d96565b82525050565b6115a261159d82611da2565b611ea4565b82525050565b60006115b48385611ba3565b93506115c1838584611e31565b82840190509392505050565b60006115d882611b7c565b6115e28185611b92565b93506115f2818560208601611e40565b6115fb81611f4d565b840191505092915050565b600061161182611b7c565b61161b8185611ba3565b935061162b818560208601611e40565b80840191505092915050565b600061164282611b87565b61164c8185611bae565b935061165c818560208601611e40565b61166581611f4d565b840191505092915050565b600061167b82611b87565b6116858185611bbf565b9350611695818560208601611e40565b80840191505092915050565b60006116ae602683611bae565b91506116b982611f6b565b604082019050919050565b60006116d1600283611bbf565b91506116dc82611fba565b600282019050919050565b60006116f4600183611bbf565b91506116ff82611fc3565b600182019050919050565b6000611717600183611bbf565b915061172282611fec565b600182019050919050565b600061173a600583611bbf565b915061174582612015565b600582019050919050565b600061175d602083611bae565b91506117688261203e565b602082019050919050565b6000611780600383611bbf565b915061178b82612067565b600382019050919050565b60006117a3602483611bae565b91506117ae8261208e565b604082019050919050565b60006117c6600183611bbf565b91506117d1826120dd565b600182019050919050565b60006117e9600283611bbf565b91506117f4826120e6565b600282019050919050565b600061180c601683611bbf565b91506118178261210f565b601682019050919050565b61182b81611e1a565b82525050565b61184261183d82611e24565b611eae565b82525050565b60006118558285876115a8565b91506118618284611606565b9150819050949350505050565b600061187a8287611606565b91506118868286611591565b600182019150611895826117b9565b91506118a18285611591565b6001820191506118b0826117b9565b91506118bc8284611591565b6001820191506118cb826116c4565b915081905095945050505050565b60006118e58285611606565b91506118f18284611606565b91508190509392505050565b60006119098287611606565b91506119158286611606565b91506119218285611606565b915061192d8284611606565b91506119388261170a565b915081905095945050505050565b60006119528286611606565b915061195e8285611606565b915061196a8284611606565b9150611975826117dc565b9150819050949350505050565b600061198e8286611606565b915061199a8285611831565b6001820191506119a9826116e7565b91506119b58284611606565b9150819050949350505050565b60006119cd8261172d565b91506119d98285611591565b6001820191506119e8826117b9565b91506119f48284611591565b600182019150611a0382611773565b91508190509392505050565b6000611a1a826117ff565b9150611a268284611670565b915081905092915050565b6000602082019050611a466000830184611573565b92915050565b6000602082019050611a616000830184611582565b92915050565b60006020820190508181036000830152611a8181846115cd565b905092915050565b60006020820190508181036000830152611aa38184611637565b905092915050565b60006020820190508181036000830152611ac4816116a1565b9050919050565b60006020820190508181036000830152611ae481611750565b9050919050565b60006020820190508181036000830152611b0481611796565b9050919050565b6000602082019050611b206000830184611822565b92915050565b6000611b30611b41565b9050611b3c8282611e73565b919050565b6000604051905090565b600067ffffffffffffffff821115611b6657611b65611f1e565b5b611b6f82611f4d565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60008085851115611bda57600080fd5b83861115611be757600080fd5b6001850283019150848603905094509492505050565b6000611c0882611e1a565b9150611c1383611e1a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c4857611c47611ec0565b5b828201905092915050565b6000611c5e82611e24565b9150611c6983611e24565b92508260ff03821115611c7f57611c7e611ec0565b5b828201905092915050565b6000611c9582611e1a565b9150611ca083611e1a565b925082611cb057611caf611eef565b5b828204905092915050565b6000611cc682611e1a565b9150611cd183611e1a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d0a57611d09611ec0565b5b828202905092915050565b6000611d2082611e24565b9150611d2b83611e24565b92508160ff0483118215151615611d4557611d44611ec0565b5b828202905092915050565b6000611d5b82611e1a565b9150611d6683611e1a565b925082821015611d7957611d78611ec0565b5b828203905092915050565b6000611d8f82611dfa565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611e5e578082015181840152602081019050611e43565b83811115611e6d576000848401525b50505050565b611e7c82611f4d565b810181811067ffffffffffffffff82111715611e9b57611e9a611f1e565b5b80604052505050565b6000819050919050565b6000611eb982611f5e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160f81b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f8000000000000000000000000000000000000000000000000000000000000000600082015250565b7f3b00000000000000000000000000000000000000000000000000000000000000600082015250565b7f2c00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7d070000000000000000000000000000000000000000000000000000000000600082015250565b7f4f6e6c792061206d6178696d756d206f662031323720636f6c6f727320616c6c60008201527f6f77656400000000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f8100000000000000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f6769663b6261736536342c00000000000000000000600082015250565b61214181611d84565b811461214c57600080fd5b50565b61215881611dce565b811461216357600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f697066733a2f2f6261666b726569636f6537726c736577746f7336327674373635767264726c6b6d3471356c783770336a35336d66356b663378793363657a326479a2646970667358221220f481d808550750e36a3c726abe630c5d93444360788f90959379c0c831a4dcd964736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class AnimatedGifImageRenderer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AnimatedGifImageRenderer__factory = AnimatedGifImageRenderer__factory;
AnimatedGifImageRenderer__factory.bytecode = _bytecode;
AnimatedGifImageRenderer__factory.abi = _abi;
//# sourceMappingURL=AnimatedGifImageRenderer__factory.js.map
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { PromiseOrValue } from "../../../../common";
import type { GifImageRenderer, GifImageRendererInterface } from "../../../../contracts/renderers/image/GifImageRenderer";
declare type GifImageRendererConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GifImageRenderer__factory extends ContractFactory {
    constructor(...args: GifImageRendererConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GifImageRenderer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GifImageRenderer;
    connect(signer: Signer): GifImageRenderer__factory;
    static readonly bytecode = "0x6080604052607e60015560006002556001600355600260045534801561002457600080fd5b5061004161003661004660201b60201c565b61004e60201b60201c565b610112565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611cd9806101216000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063715018a6116100975780639f3ab490116100665780639f3ab4901461028e578063a4543321146102ac578063d6ac7434146102ca578063f2fde38b146102e8576100ff565b8063715018a61461022a57806381612ceb146102345780638da5cb5b1461025257806392348b2214610270576100ff565b80632507de41116100d35780632507de411461018e578063316df61e146101ac57806343c5820c146101dc5780636e266add1461020c576100ff565b8062a85d691461010457806301ffc9a71461012257806306fdde0314610152578063226aa21714610170575b600080fd5b61010c610304565b60405161011991906116a5565b60405180910390f35b61013c60048036038101906101379190611115565b61032c565b60405161014991906115e6565b60405180910390f35b61015a6103a6565b6040516101679190611623565b60405180910390f35b6101786103e3565b60405161018591906116a5565b60405180910390f35b6101966103e9565b6040516101a391906116a5565b60405180910390f35b6101c660048036038101906101c1919061113e565b6103ef565b6040516101d39190611623565b60405180910390f35b6101f660048036038101906101f1919061113e565b610461565b6040516102039190611601565b60405180910390f35b61021461064a565b6040516102219190611601565b60405180910390f35b610232610683565b005b61023c610697565b6040516102499190611623565b60405180910390f35b61025a6106d4565b60405161026791906115cb565b60405180910390f35b6102786106e3565b6040516102859190611623565b60405180910390f35b610296610703565b6040516102a391906116a5565b60405180910390f35b6102b4610709565b6040516102c19190611601565b60405180910390f35b6102d2610742565b6040516102df91906116a5565b60405180910390f35b61030260048036038101906102fd91906110ec565b610748565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039f575061039e826107cc565b5b9050919050565b60606040518060400160405280600881526020017f476966496d616765000000000000000000000000000000000000000000000000815250905090565b60045481565b60035481565b60606040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000008152506104396104348585610461565b610836565b60405160200161044a9291906114f1565b604051602081830303815290604052905092915050565b606060006040518060200160405280600081525090506000600385856004548181106104b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c6104cd9190611859565b60036104d99190611797565b60ff1690505b848490508110156105c8576000600154826104fa9190611741565b90506000868684908989905085116105125784610517565b898990505b926105249392919061170e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090508387879050831161057b57600161057e565b60025b60ff16825161058d9190611741565b826040516020016105a0939291906114b1565b60405160208183030381529060405293505050600154816105c19190611741565b90506104df565b506105d384846109c0565b6105dd8585610ad1565b6040518060400160405280600881526020017f21f904010000000000000000000000000000000000000000000000000000000081525061061d8787610c1e565b8460405160200161063295949392919061145b565b60405160208183030381529060405291505092915050565b6040518060400160405280600b81526020017f2c0000000080008000000700000000000000000000000000000000000000000081525081565b61068b610cd2565b6106956000610d50565b565b60606040518060400160405280600a81526020017f696d6167655f6461746100000000000000000000000000000000000000000000815250905090565b60006106de610e14565b905090565b6060604051806080016040528060428152602001611c2260429139905090565b60015481565b6040518060400160405280600881526020017f21f904010000000000000000000000000000000000000000000000000000000081525081565b60025481565b610750610cd2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b790611645565b60405180910390fd5b6107c981610d50565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610859576040518060200160405280600081525090506109bb565b6000604051806060016040528060408152602001611c6460409139905060006003600285516108889190611741565b61089291906117ce565b600461089e91906117ff565b67ffffffffffffffff8111156108dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561090f5781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561097b576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610920565b505060038651066001811461099757600281146109aa576109b2565b603d6001830353603d60028303536109b2565b603d60018303535b50505080925050505b919050565b606082826002548181106109fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8383600354818110610a42577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b610aa860018686600454818110610a8c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c610aa39190611797565b610e3d565b604051602001610aba93929190611562565b604051602081830303815290604052905092915050565b606060008383600454818110610b10577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c9050600060038260ff16610b3c600185610b379190611797565b610fe6565b610b469190611894565b610b5091906117ff565b67ffffffffffffffff811115610b8f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610bc15781602001600182028036833780820191505090505b5090508484600390600385610bd69190611859565b6003610be29190611797565b60ff1692610bf29392919061170e565b82604051602001610c0593929190611435565b6040516020818303038152906040529250505092915050565b60608282600254818110610c5b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8383600354818110610ca0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b604051602001610cbb929190611515565b604051602081830303815290604052905092915050565b610cda611070565b73ffffffffffffffffffffffffffffffffffffffff16610cf86106d4565b73ffffffffffffffffffffffffffffffffffffffff1614610d4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4590611665565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060808260ff1610610e85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7c90611685565b60405180910390fd5b60408260ff161115610eb9577ff6000000000000000000000000000000000000000000000000000000000000009050610fe1565b60208260ff161115610eed577ff5000000000000000000000000000000000000000000000000000000000000009050610fe1565b60108260ff161115610f21577ff4000000000000000000000000000000000000000000000000000000000000009050610fe1565b60088260ff161115610f55577ff3000000000000000000000000000000000000000000000000000000000000009050610fe1565b60048260ff161115610f89577ff2000000000000000000000000000000000000000000000000000000000000009050610fe1565b60028260ff161115610fbd577ff1000000000000000000000000000000000000000000000000000000000000009050610fe1565b7ff00000000000000000000000000000000000000000000000000000000000000090505b919050565b600060408260ff161115610ffd576080905061106b565b60208260ff161115611012576040905061106b565b60108260ff161115611027576020905061106b565b60088260ff16111561103c576010905061106b565b60048260ff161115611051576008905061106b565b60028260ff161115611066576004905061106b565b600290505b919050565b600033905090565b60008135905061108781611bf3565b92915050565b60008135905061109c81611c0a565b92915050565b60008083601f8401126110b457600080fd5b8235905067ffffffffffffffff8111156110cd57600080fd5b6020830191508360018202830111156110e557600080fd5b9250929050565b6000602082840312156110fe57600080fd5b600061110c84828501611078565b91505092915050565b60006020828403121561112757600080fd5b60006111358482850161108d565b91505092915050565b6000806020838503121561115157600080fd5b600083013567ffffffffffffffff81111561116b57600080fd5b611177858286016110a2565b92509250509250929050565b61118c816118c8565b82525050565b61119b816118da565b82525050565b6111b26111ad826118e6565b6119b7565b82525050565b60006111c483856116e7565b93506111d1838584611975565b82840190509392505050565b60006111e8826116c0565b6111f281856116d6565b9350611202818560208601611984565b61120b81611a31565b840191505092915050565b6000611221826116c0565b61122b81856116e7565b935061123b818560208601611984565b80840191505092915050565b6000611252826116cb565b61125c81856116f2565b935061126c818560208601611984565b61127581611a31565b840191505092915050565b600061128b826116cb565b6112958185611703565b93506112a5818560208601611984565b80840191505092915050565b60006112be6026836116f2565b91506112c982611a4f565b604082019050919050565b60006112e1600283611703565b91506112ec82611a9e565b600282019050919050565b6000611304600183611703565b915061130f82611aa7565b600182019050919050565b6000611327600583611703565b915061133282611ad0565b600582019050919050565b600061134a6020836116f2565b915061135582611af9565b602082019050919050565b600061136d600383611703565b915061137882611b22565b600382019050919050565b60006113906024836116f2565b915061139b82611b49565b604082019050919050565b60006113b3600183611703565b91506113be82611b98565b600182019050919050565b60006113d6600383611703565b91506113e182611ba1565b600382019050919050565b60006113f9600683611703565b915061140482611bca565b600682019050919050565b6114188161195e565b82525050565b61142f61142a82611968565b6119c1565b82525050565b60006114428285876111b8565b915061144e8284611216565b9150819050949350505050565b60006114678288611216565b91506114738287611216565b915061147f8286611216565b915061148b8285611216565b91506114978284611216565b91506114a2826113c9565b91508190509695505050505050565b60006114bd8286611216565b91506114c9828561141e565b6001820191506114d8826112f7565b91506114e48284611216565b9150819050949350505050565b60006114fd8285611280565b91506115098284611280565b91508190509392505050565b60006115208261131a565b915061152c82856111a1565b60018201915061153b826113a6565b915061154782846111a1565b60018201915061155682611360565b91508190509392505050565b600061156d826113ec565b915061157982866111a1565b600182019150611588826113a6565b915061159482856111a1565b6001820191506115a3826113a6565b91506115af82846111a1565b6001820191506115be826112d4565b9150819050949350505050565b60006020820190506115e06000830184611183565b92915050565b60006020820190506115fb6000830184611192565b92915050565b6000602082019050818103600083015261161b81846111dd565b905092915050565b6000602082019050818103600083015261163d8184611247565b905092915050565b6000602082019050818103600083015261165e816112b1565b9050919050565b6000602082019050818103600083015261167e8161133d565b9050919050565b6000602082019050818103600083015261169e81611383565b9050919050565b60006020820190506116ba600083018461140f565b92915050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561171e57600080fd5b8386111561172b57600080fd5b6001850283019150848603905094509492505050565b600061174c8261195e565b91506117578361195e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561178c5761178b6119d3565b5b828201905092915050565b60006117a282611968565b91506117ad83611968565b92508260ff038211156117c3576117c26119d3565b5b828201905092915050565b60006117d98261195e565b91506117e48361195e565b9250826117f4576117f3611a02565b5b828204905092915050565b600061180a8261195e565b91506118158361195e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561184e5761184d6119d3565b5b828202905092915050565b600061186482611968565b915061186f83611968565b92508160ff0483118215151615611889576118886119d3565b5b828202905092915050565b600061189f8261195e565b91506118aa8361195e565b9250828210156118bd576118bc6119d3565b5b828203905092915050565b60006118d38261193e565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b838110156119a2578082015181840152602081019050611987565b838111156119b1576000848401525b50505050565b6000819050919050565b60006119cc82611a42565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b60008160f81b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f8000000000000000000000000000000000000000000000000000000000000000600082015250565b7f2c00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7d070000000000000000000000000000000000000000000000000000000000600082015250565b7f4f6e6c792061206d6178696d756d206f662031323720636f6c6f727320616c6c60008201527f6f77656400000000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f81003b0000000000000000000000000000000000000000000000000000000000600082015250565b7f4749463839610000000000000000000000000000000000000000000000000000600082015250565b611bfc816118c8565b8114611c0757600080fd5b50565b611c1381611912565b8114611c1e57600080fd5b5056fe697066733a2f2f6261666b7265696436336e757a79357779346c34326d65766c373364766b6e787078713335647761726a3437676e6d6d73373534696e626e6772614142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220936fc7ff1d0f2837858c1cc0dd4520d25ce3dc98c41bf0bece779f67e1c04fdc64736f6c63430008040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): GifImageRendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GifImageRenderer;
}
export {};
//# sourceMappingURL=GifImageRenderer__factory.d.ts.map
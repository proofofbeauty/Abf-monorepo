import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { PromiseOrValue } from "../../../common";
import type { AddressSort, AddressSortInterface } from "../../../contracts/libraries/AddressSort";
declare type AddressSortConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressSort__factory extends ContractFactory {
    constructor(...args: AddressSortConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AddressSort>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AddressSort;
    connect(signer: Signer): AddressSort__factory;
    static readonly bytecode = "0x610a46610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063128424a71461003a575b600080fd5b610054600480360381019061004f919061064e565b61006a565b6040516100619190610714565b60405180910390f35b60606000825167ffffffffffffffff8111156100af577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156100dd5781602001602082028036833780820191505090505b50905060005b835181101561019957838181518110610125577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1682828151811061017c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508061019290610912565b90506100e3565b506101b3816000600186516101ae9190610847565b6102fd565b825167ffffffffffffffff8111156101f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156102225781602001602082028036833780820191505090505b50915060005b83518110156102f65781818151811061026a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518382815181106102ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806102ef90610912565b9050610228565b5050919050565b600082905060008290508082141561031657505061059e565b600085600286866103279190610847565b6103319190610816565b8661033c91906107c0565b81518110610373577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190505b818311610572575b808684815181106103c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015110156103e15782806103d990610912565b935050610386565b5b85828151811061041b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181101561043d578180610435906108b7565b9250506103e2565b81831161056d5785828151811061047d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518684815181106104be577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518785815181106104ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010188858151811061053f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010182815250828152505050828061055b90610912565b9350508180610569906108b7565b9250505b61037e565b81851015610586576105858686846102fd565b5b8383101561059a576105998684866102fd565b5b5050505b505050565b60006105b66105b18461075b565b610736565b905080838252602082019050828560208602820111156105d557600080fd5b60005b8581101561060557816105eb888261060f565b8452602084019350602083019250506001810190506105d8565b5050509392505050565b60008135905061061e816109f9565b92915050565b600082601f83011261063557600080fd5b81356106458482602086016105a3565b91505092915050565b60006020828403121561066057600080fd5b600082013567ffffffffffffffff81111561067a57600080fd5b61068684828501610624565b91505092915050565b600061069b83836106a7565b60208301905092915050565b6106b08161087b565b82525050565b60006106c182610797565b6106cb81856107af565b93506106d683610787565b8060005b838110156107075781516106ee888261068f565b97506106f9836107a2565b9250506001810190506106da565b5085935050505092915050565b6000602082019050818103600083015261072e81846106b6565b905092915050565b6000610740610751565b905061074c82826108e1565b919050565b6000604051905090565b600067ffffffffffffffff821115610776576107756109b9565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60006107cb826108ad565b91506107d6836108ad565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561080b5761080a61095b565b5b828201905092915050565b6000610821826108ad565b915061082c836108ad565b92508261083c5761083b61098a565b5b828204905092915050565b6000610852826108ad565b915061085d836108ad565b9250828210156108705761086f61095b565b5b828203905092915050565b60006108868261088d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108c2826108ad565b915060008214156108d6576108d561095b565b5b600182039050919050565b6108ea826109e8565b810181811067ffffffffffffffff82111715610909576109086109b9565b5b80604052505050565b600061091d826108ad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156109505761094f61095b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610a028161087b565b8114610a0d57600080fd5b5056fea264697066735822122070b775fbb44cf47807d78b522ef56b7e18059469cb23c0922f2d29d14f6b869764736f6c63430008040033";
    static readonly abi: {
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
    }[];
    static createInterface(): AddressSortInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressSort;
}
export {};
//# sourceMappingURL=AddressSort__factory.d.ts.map
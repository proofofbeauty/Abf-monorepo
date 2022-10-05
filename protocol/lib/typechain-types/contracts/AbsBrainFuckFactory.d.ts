import type { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../common";
export declare namespace ERC721Z {
    type InitConfigStruct = {
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        seed: PromiseOrValue<BytesLike>;
        contractMetadataRenderer: PromiseOrValue<string>;
        metadataRenderer: PromiseOrValue<string>;
        allowRendererSwapping: PromiseOrValue<boolean>;
        adminMinter: PromiseOrValue<string>;
        mintingSupply: PromiseOrValue<BigNumberish>;
    };
    type InitConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        boolean,
        string,
        BigNumber
    ] & {
        name: string;
        symbol: string;
        seed: string;
        contractMetadataRenderer: string;
        metadataRenderer: string;
        allowRendererSwapping: boolean;
        adminMinter: string;
        mintingSupply: BigNumber;
    };
}
export declare namespace AbsBrainFuckMetadataRenderer {
    type AbsBrainFuckMetadataConfigStruct = {
        vm: PromiseOrValue<string>;
        outputRenderer: PromiseOrValue<string>;
        code: PromiseOrValue<BytesLike>;
        input: PromiseOrValue<BytesLike>;
    };
    type AbsBrainFuckMetadataConfigStructOutput = [
        string,
        string,
        string,
        string
    ] & {
        vm: string;
        outputRenderer: string;
        code: string;
        input: string;
    };
}
export declare namespace AbsBrainFuckFactory {
    type CreateNFTAdditionalConfigStruct = {
        royaltyFraction: PromiseOrValue<BigNumberish>;
    };
    type CreateNFTAdditionalConfigStructOutput = [BigNumber] & {
        royaltyFraction: BigNumber;
    };
}
export declare namespace ERC721ZMinter {
    type InitConfigStruct = {
        price: PromiseOrValue<BigNumberish>;
        royaltyFraction: PromiseOrValue<BigNumberish>;
        whitelistToken: PromiseOrValue<string>;
        claimMerkleRoot: PromiseOrValue<BytesLike>;
        claimMerkleTreeURI: PromiseOrValue<string>;
    };
    type InitConfigStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        price: BigNumber;
        royaltyFraction: BigNumber;
        whitelistToken: string;
        claimMerkleRoot: string;
        claimMerkleTreeURI: string;
    };
}
export interface AbsBrainFuckFactoryInterface extends utils.Interface {
    functions: {
        "absBrainFuckMetadataRenderer()": FunctionFragment;
        "createNFT((string,string,bytes32,address,address,bool,address,uint256),(address,address,bytes,bytes),(uint96),(uint256,uint96,address,bytes32,string))": FunctionFragment;
        "erc721ZImplementation()": FunctionFragment;
        "erc721ZMinterImplementation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "absBrainFuckMetadataRenderer" | "createNFT" | "erc721ZImplementation" | "erc721ZMinterImplementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "absBrainFuckMetadataRenderer", values?: undefined): string;
    encodeFunctionData(functionFragment: "createNFT", values: [
        ERC721Z.InitConfigStruct,
        AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct,
        AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct,
        ERC721ZMinter.InitConfigStruct
    ]): string;
    encodeFunctionData(functionFragment: "erc721ZImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "erc721ZMinterImplementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "absBrainFuckMetadataRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc721ZImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc721ZMinterImplementation", data: BytesLike): Result;
    events: {
        "CreatedNFT(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreatedNFT"): EventFragment;
}
export interface CreatedNFTEventObject {
    nft: string;
    minter: string;
    creator: string;
}
export declare type CreatedNFTEvent = TypedEvent<[
    string,
    string,
    string
], CreatedNFTEventObject>;
export declare type CreatedNFTEventFilter = TypedEventFilter<CreatedNFTEvent>;
export interface AbsBrainFuckFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbsBrainFuckFactoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        absBrainFuckMetadataRenderer(overrides?: CallOverrides): Promise<[string]>;
        createNFT(config: ERC721Z.InitConfigStruct, metadataConfig: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, additionalConfig: AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct, minterConfig: ERC721ZMinter.InitConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        erc721ZImplementation(overrides?: CallOverrides): Promise<[string]>;
        erc721ZMinterImplementation(overrides?: CallOverrides): Promise<[string]>;
    };
    absBrainFuckMetadataRenderer(overrides?: CallOverrides): Promise<string>;
    createNFT(config: ERC721Z.InitConfigStruct, metadataConfig: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, additionalConfig: AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct, minterConfig: ERC721ZMinter.InitConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    erc721ZImplementation(overrides?: CallOverrides): Promise<string>;
    erc721ZMinterImplementation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        absBrainFuckMetadataRenderer(overrides?: CallOverrides): Promise<string>;
        createNFT(config: ERC721Z.InitConfigStruct, metadataConfig: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, additionalConfig: AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct, minterConfig: ERC721ZMinter.InitConfigStruct, overrides?: CallOverrides): Promise<[string, string]>;
        erc721ZImplementation(overrides?: CallOverrides): Promise<string>;
        erc721ZMinterImplementation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CreatedNFT(address,address,address)"(nft?: null, minter?: null, creator?: null): CreatedNFTEventFilter;
        CreatedNFT(nft?: null, minter?: null, creator?: null): CreatedNFTEventFilter;
    };
    estimateGas: {
        absBrainFuckMetadataRenderer(overrides?: CallOverrides): Promise<BigNumber>;
        createNFT(config: ERC721Z.InitConfigStruct, metadataConfig: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, additionalConfig: AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct, minterConfig: ERC721ZMinter.InitConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        erc721ZImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        erc721ZMinterImplementation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        absBrainFuckMetadataRenderer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createNFT(config: ERC721Z.InitConfigStruct, metadataConfig: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, additionalConfig: AbsBrainFuckFactory.CreateNFTAdditionalConfigStruct, minterConfig: ERC721ZMinter.InitConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        erc721ZImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc721ZMinterImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AbsBrainFuckFactory.d.ts.map
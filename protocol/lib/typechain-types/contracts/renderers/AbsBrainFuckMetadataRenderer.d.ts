import type { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
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
export interface AbsBrainFuckMetadataRendererInterface extends utils.Interface {
    functions: {
        "addMetadataConfig(address,(address,address,bytes,bytes))": FunctionFragment;
        "additionalMetadataURI()": FunctionFragment;
        "decodeConfig(bytes)": FunctionFragment;
        "encodeConfig((address,address,bytes,bytes))": FunctionFragment;
        "getTokenSeed(bytes32,uint256,bytes)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "propsSize()": FunctionFragment;
        "render(bytes)": FunctionFragment;
        "renderRaw(bytes)": FunctionFragment;
        "renderType()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addMetadataConfig" | "additionalMetadataURI" | "decodeConfig" | "encodeConfig" | "getTokenSeed" | "name" | "owner" | "propsSize" | "render" | "renderRaw" | "renderType" | "renounceOwnership" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "addMetadataConfig", values: [
        PromiseOrValue<string>,
        AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct
    ]): string;
    encodeFunctionData(functionFragment: "additionalMetadataURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "decodeConfig", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encodeConfig", values: [AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct]): string;
    encodeFunctionData(functionFragment: "getTokenSeed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "propsSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "render", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderRaw", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderType", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addMetadataConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "additionalMetadataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenSeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propsSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "render", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renderRaw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renderType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface AbsBrainFuckMetadataRenderer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbsBrainFuckMetadataRendererInterface;
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
        addMetadataConfig(nftAddr: PromiseOrValue<string>, config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;
        decodeConfig(encodedConfig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStructOutput
        ] & {
            config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStructOutput;
        }>;
        encodeConfig(config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<[string]>;
        getTokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        propsSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        renderType(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addMetadataConfig(nftAddr: PromiseOrValue<string>, config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
    decodeConfig(encodedConfig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStructOutput>;
    encodeConfig(config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<string>;
    getTokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    propsSize(overrides?: CallOverrides): Promise<BigNumber>;
    render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    renderType(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMetadataConfig(nftAddr: PromiseOrValue<string>, config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<void>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
        decodeConfig(encodedConfig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStructOutput>;
        encodeConfig(config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<string>;
        getTokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        propsSize(overrides?: CallOverrides): Promise<BigNumber>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renderType(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addMetadataConfig(nftAddr: PromiseOrValue<string>, config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;
        decodeConfig(encodedConfig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeConfig(config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        propsSize(overrides?: CallOverrides): Promise<BigNumber>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        renderType(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addMetadataConfig(nftAddr: PromiseOrValue<string>, config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeConfig(encodedConfig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeConfig(config: AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfigStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propsSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renderType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AbsBrainFuckMetadataRenderer.d.ts.map
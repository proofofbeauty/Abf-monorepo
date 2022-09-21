import type { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface CompressedAnimatedGifRendererInterface extends utils.Interface {
    functions: {
        "COLOR_CONFIGURATION_INDEX()": FunctionFragment;
        "COMPRESSED_DATA_MIN_INDEX()": FunctionFragment;
        "HEIGHT_INDEX()": FunctionFragment;
        "IMAGE_DATA_START_INDEX()": FunctionFragment;
        "MAX_NUM_CONFIGURATIONS()": FunctionFragment;
        "WIDTH_INDEX()": FunctionFragment;
        "additionalMetadataURI()": FunctionFragment;
        "batchAddColorTables(bytes[])": FunctionFragment;
        "convertProps(bytes)": FunctionFragment;
        "getColorTable(uint256)": FunctionFragment;
        "maxConfigurationIndex()": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "COLOR_CONFIGURATION_INDEX" | "COMPRESSED_DATA_MIN_INDEX" | "HEIGHT_INDEX" | "IMAGE_DATA_START_INDEX" | "MAX_NUM_CONFIGURATIONS" | "WIDTH_INDEX" | "additionalMetadataURI" | "batchAddColorTables" | "convertProps" | "getColorTable" | "maxConfigurationIndex" | "name" | "owner" | "propsSize" | "render" | "renderRaw" | "renderType" | "renounceOwnership" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "COLOR_CONFIGURATION_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "COMPRESSED_DATA_MIN_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "HEIGHT_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DATA_START_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NUM_CONFIGURATIONS", values?: undefined): string;
    encodeFunctionData(functionFragment: "WIDTH_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "additionalMetadataURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchAddColorTables", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "convertProps", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getColorTable", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "maxConfigurationIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "propsSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "render", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderRaw", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderType", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "COLOR_CONFIGURATION_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COMPRESSED_DATA_MIN_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HEIGHT_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DATA_START_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NUM_CONFIGURATIONS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WIDTH_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "additionalMetadataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchAddColorTables", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertProps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getColorTable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxConfigurationIndex", data: BytesLike): Result;
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
        "AddedConfiguration(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedConfiguration"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface AddedConfigurationEventObject {
    index: BigNumber;
}
export declare type AddedConfigurationEvent = TypedEvent<[
    BigNumber
], AddedConfigurationEventObject>;
export declare type AddedConfigurationEventFilter = TypedEventFilter<AddedConfigurationEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface CompressedAnimatedGifRenderer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CompressedAnimatedGifRendererInterface;
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
        COLOR_CONFIGURATION_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        COMPRESSED_DATA_MIN_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        IMAGE_DATA_START_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_NUM_CONFIGURATIONS(overrides?: CallOverrides): Promise<[BigNumber]>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;
        batchAddColorTables(colorTables: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        convertProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        getColorTable(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        maxConfigurationIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
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
    COLOR_CONFIGURATION_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    COMPRESSED_DATA_MIN_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    IMAGE_DATA_START_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_NUM_CONFIGURATIONS(overrides?: CallOverrides): Promise<BigNumber>;
    WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
    batchAddColorTables(colorTables: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    convertProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getColorTable(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    maxConfigurationIndex(overrides?: CallOverrides): Promise<BigNumber>;
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
        COLOR_CONFIGURATION_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        COMPRESSED_DATA_MIN_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_START_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUM_CONFIGURATIONS(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
        batchAddColorTables(colorTables: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        convertProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getColorTable(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        maxConfigurationIndex(overrides?: CallOverrides): Promise<BigNumber>;
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
        "AddedConfiguration(uint256)"(index?: null): AddedConfigurationEventFilter;
        AddedConfiguration(index?: null): AddedConfigurationEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        COLOR_CONFIGURATION_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        COMPRESSED_DATA_MIN_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_START_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUM_CONFIGURATIONS(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;
        batchAddColorTables(colorTables: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        convertProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getColorTable(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        maxConfigurationIndex(overrides?: CallOverrides): Promise<BigNumber>;
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
        COLOR_CONFIGURATION_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COMPRESSED_DATA_MIN_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DATA_START_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_NUM_CONFIGURATIONS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchAddColorTables(colorTables: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        convertProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getColorTable(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxConfigurationIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
//# sourceMappingURL=CompressedAnimatedGifRenderer.d.ts.map
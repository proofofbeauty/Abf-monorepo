import type { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../../common";
export interface GifImageRendererInterface extends utils.Interface {
    functions: {
        "GRAPHIC_CONTROL_EXTENSION()": FunctionFragment;
        "HEIGHT_INDEX()": FunctionFragment;
        "IMAGE_DATA_CHUNK_SIZE()": FunctionFragment;
        "IMAGE_DESCRIPTOR()": FunctionFragment;
        "NUM_COLORS_INDEX()": FunctionFragment;
        "WIDTH_INDEX()": FunctionFragment;
        "additionalMetadataURI()": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "GRAPHIC_CONTROL_EXTENSION" | "HEIGHT_INDEX" | "IMAGE_DATA_CHUNK_SIZE" | "IMAGE_DESCRIPTOR" | "NUM_COLORS_INDEX" | "WIDTH_INDEX" | "additionalMetadataURI" | "name" | "owner" | "propsSize" | "render" | "renderRaw" | "renderType" | "renounceOwnership" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "GRAPHIC_CONTROL_EXTENSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "HEIGHT_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DATA_CHUNK_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DESCRIPTOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "NUM_COLORS_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "WIDTH_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "additionalMetadataURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "propsSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "render", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderRaw", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderType", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "GRAPHIC_CONTROL_EXTENSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HEIGHT_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DATA_CHUNK_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DESCRIPTOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NUM_COLORS_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WIDTH_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "additionalMetadataURI", data: BytesLike): Result;
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
export interface GifImageRenderer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GifImageRendererInterface;
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
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<[string]>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<[string]>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;
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
    GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<string>;
    HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<string>;
    NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
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
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<string>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<string>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
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
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<BigNumber>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;
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
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
//# sourceMappingURL=GifImageRenderer.d.ts.map
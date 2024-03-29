import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface AnimatedGifImageRendererInterface extends utils.Interface {
    functions: {
        "APPLICATION_EXTENSION()": FunctionFragment;
        "GIF_89_A()": FunctionFragment;
        "GRAPHIC_CONTROL_EXTENSION()": FunctionFragment;
        "HEIGHT_INDEX()": FunctionFragment;
        "IMAGE_DATA_CHUNK_SIZE()": FunctionFragment;
        "IMAGE_DESCRIPTOR()": FunctionFragment;
        "NUM_COLORS_INDEX()": FunctionFragment;
        "WIDTH_INDEX()": FunctionFragment;
        "additionalMetadataURI()": FunctionFragment;
        "attributes(bytes)": FunctionFragment;
        "getImageData(bytes,bytes)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "propsSize()": FunctionFragment;
        "render(bytes)": FunctionFragment;
        "renderAttributeKey()": FunctionFragment;
        "renderRaw(bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "APPLICATION_EXTENSION" | "GIF_89_A" | "GRAPHIC_CONTROL_EXTENSION" | "HEIGHT_INDEX" | "IMAGE_DATA_CHUNK_SIZE" | "IMAGE_DESCRIPTOR" | "NUM_COLORS_INDEX" | "WIDTH_INDEX" | "additionalMetadataURI" | "attributes" | "getImageData" | "name" | "owner" | "propsSize" | "render" | "renderAttributeKey" | "renderRaw" | "renounceOwnership" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "APPLICATION_EXTENSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "GIF_89_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "GRAPHIC_CONTROL_EXTENSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "HEIGHT_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DATA_CHUNK_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DESCRIPTOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "NUM_COLORS_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "WIDTH_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "additionalMetadataURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "attributes", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getImageData", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "propsSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "render", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renderAttributeKey", values?: undefined): string;
    encodeFunctionData(functionFragment: "renderRaw", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "APPLICATION_EXTENSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GIF_89_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GRAPHIC_CONTROL_EXTENSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HEIGHT_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DATA_CHUNK_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DESCRIPTOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NUM_COLORS_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WIDTH_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "additionalMetadataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attributes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImageData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propsSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "render", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renderAttributeKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renderRaw", data: BytesLike): Result;
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
export interface AnimatedGifImageRenderer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AnimatedGifImageRendererInterface;
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
        APPLICATION_EXTENSION(overrides?: CallOverrides): Promise<[string]>;
        GIF_89_A(overrides?: CallOverrides): Promise<[string]>;
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<[string]>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<[string]>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;
        attributes(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getImageData(imageDescriptor: PromiseOrValue<BytesLike>, props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        propsSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        renderAttributeKey(overrides?: CallOverrides): Promise<[string]>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    APPLICATION_EXTENSION(overrides?: CallOverrides): Promise<string>;
    GIF_89_A(overrides?: CallOverrides): Promise<string>;
    GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<string>;
    HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<string>;
    NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
    attributes(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getImageData(imageDescriptor: PromiseOrValue<BytesLike>, props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    propsSize(overrides?: CallOverrides): Promise<BigNumber>;
    render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    renderAttributeKey(overrides?: CallOverrides): Promise<string>;
    renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        APPLICATION_EXTENSION(overrides?: CallOverrides): Promise<string>;
        GIF_89_A(overrides?: CallOverrides): Promise<string>;
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<string>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<string>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<string>;
        attributes(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getImageData(imageDescriptor: PromiseOrValue<BytesLike>, props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        propsSize(overrides?: CallOverrides): Promise<BigNumber>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renderAttributeKey(overrides?: CallOverrides): Promise<string>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        APPLICATION_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;
        GIF_89_A(overrides?: CallOverrides): Promise<BigNumber>;
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<BigNumber>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;
        attributes(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getImageData(imageDescriptor: PromiseOrValue<BytesLike>, props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        propsSize(overrides?: CallOverrides): Promise<BigNumber>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        renderAttributeKey(overrides?: CallOverrides): Promise<BigNumber>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        APPLICATION_EXTENSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GIF_89_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GRAPHIC_CONTROL_EXTENSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HEIGHT_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DATA_CHUNK_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DESCRIPTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NUM_COLORS_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WIDTH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        additionalMetadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        attributes(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImageData(imageDescriptor: PromiseOrValue<BytesLike>, props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propsSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        render(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renderAttributeKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renderRaw(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AnimatedGifImageRenderer.d.ts.map
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface ERC721ZUtilsInterface extends utils.Interface {
    functions: {
        "ANIMATION_URL_KEY()": FunctionFragment;
        "ATTRIBUTES_KEY()": FunctionFragment;
        "BACKGROUND_COLOR_KEY()": FunctionFragment;
        "DESCRIPTION_KEY()": FunctionFragment;
        "EXTERNAL_URL_KEY()": FunctionFragment;
        "GIF_DATA_BASE_64_PREFIX()": FunctionFragment;
        "IMAGE_DATA_KEY()": FunctionFragment;
        "IMAGE_KEY()": FunctionFragment;
        "JSON_DATA_BASE_64_PREFIX()": FunctionFragment;
        "METADATA_RENDER_TYPE()": FunctionFragment;
        "MIDDLEWARE_RENDER_TYPE()": FunctionFragment;
        "NAME_KEY()": FunctionFragment;
        "SVG_DATA_BASE_64_PREFIX()": FunctionFragment;
        "array(string[])": FunctionFragment;
        "decodeContractMetadataProps(bytes)": FunctionFragment;
        "decodeMetadataProps(bytes)": FunctionFragment;
        "delimit(string[])": FunctionFragment;
        "encodeJson(string)": FunctionFragment;
        "getAttributeObject(string,string)": FunctionFragment;
        "getAttributeObjectWithDisplayType(string,string,string)": FunctionFragment;
        "getAttributeObjectWithDisplayTypeAndMaxValue(string,string,string,string)": FunctionFragment;
        "getAttributeObjectWithMaxValue(string,string,string)": FunctionFragment;
        "getBaseAttributeObject(string,string,string)": FunctionFragment;
        "keyValue(string,string)": FunctionFragment;
        "object(string[])": FunctionFragment;
        "stringWrap(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ANIMATION_URL_KEY" | "ATTRIBUTES_KEY" | "BACKGROUND_COLOR_KEY" | "DESCRIPTION_KEY" | "EXTERNAL_URL_KEY" | "GIF_DATA_BASE_64_PREFIX" | "IMAGE_DATA_KEY" | "IMAGE_KEY" | "JSON_DATA_BASE_64_PREFIX" | "METADATA_RENDER_TYPE" | "MIDDLEWARE_RENDER_TYPE" | "NAME_KEY" | "SVG_DATA_BASE_64_PREFIX" | "array" | "decodeContractMetadataProps" | "decodeMetadataProps" | "delimit" | "encodeJson" | "getAttributeObject" | "getAttributeObjectWithDisplayType" | "getAttributeObjectWithDisplayTypeAndMaxValue" | "getAttributeObjectWithMaxValue" | "getBaseAttributeObject" | "keyValue" | "object" | "stringWrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "ANIMATION_URL_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "ATTRIBUTES_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "BACKGROUND_COLOR_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DESCRIPTION_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXTERNAL_URL_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "GIF_DATA_BASE_64_PREFIX", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_DATA_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "IMAGE_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "JSON_DATA_BASE_64_PREFIX", values?: undefined): string;
    encodeFunctionData(functionFragment: "METADATA_RENDER_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIDDLEWARE_RENDER_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "NAME_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "SVG_DATA_BASE_64_PREFIX", values?: undefined): string;
    encodeFunctionData(functionFragment: "array", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "decodeContractMetadataProps", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decodeMetadataProps", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "delimit", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "encodeJson", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAttributeObject", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAttributeObjectWithDisplayType", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAttributeObjectWithDisplayTypeAndMaxValue", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAttributeObjectWithMaxValue", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getBaseAttributeObject", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "keyValue", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "object", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "stringWrap", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ANIMATION_URL_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ATTRIBUTES_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BACKGROUND_COLOR_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DESCRIPTION_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXTERNAL_URL_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GIF_DATA_BASE_64_PREFIX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_DATA_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IMAGE_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "JSON_DATA_BASE_64_PREFIX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "METADATA_RENDER_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIDDLEWARE_RENDER_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NAME_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SVG_DATA_BASE_64_PREFIX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "array", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeContractMetadataProps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeMetadataProps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeJson", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttributeObject", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttributeObjectWithDisplayType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttributeObjectWithDisplayTypeAndMaxValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttributeObjectWithMaxValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseAttributeObject", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "object", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stringWrap", data: BytesLike): Result;
    events: {};
}
export interface ERC721ZUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC721ZUtilsInterface;
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
        ANIMATION_URL_KEY(overrides?: CallOverrides): Promise<[string]>;
        ATTRIBUTES_KEY(overrides?: CallOverrides): Promise<[string]>;
        BACKGROUND_COLOR_KEY(overrides?: CallOverrides): Promise<[string]>;
        DESCRIPTION_KEY(overrides?: CallOverrides): Promise<[string]>;
        EXTERNAL_URL_KEY(overrides?: CallOverrides): Promise<[string]>;
        GIF_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<[string]>;
        IMAGE_DATA_KEY(overrides?: CallOverrides): Promise<[string]>;
        IMAGE_KEY(overrides?: CallOverrides): Promise<[string]>;
        JSON_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<[string]>;
        METADATA_RENDER_TYPE(overrides?: CallOverrides): Promise<[string]>;
        MIDDLEWARE_RENDER_TYPE(overrides?: CallOverrides): Promise<[string]>;
        NAME_KEY(overrides?: CallOverrides): Promise<[string]>;
        SVG_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<[string]>;
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[string]>;
        decodeContractMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            nft: string;
        }>;
        decodeMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string
        ] & {
            nft: string;
            tokenId: BigNumber;
            seed: string;
        }>;
        delimit(values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[string]>;
        encodeJson(content: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getAttributeObjectWithDisplayType(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getAttributeObjectWithDisplayTypeAndMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getAttributeObjectWithMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getBaseAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, extra: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        keyValue(key: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        object(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[string]>;
        stringWrap(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    ANIMATION_URL_KEY(overrides?: CallOverrides): Promise<string>;
    ATTRIBUTES_KEY(overrides?: CallOverrides): Promise<string>;
    BACKGROUND_COLOR_KEY(overrides?: CallOverrides): Promise<string>;
    DESCRIPTION_KEY(overrides?: CallOverrides): Promise<string>;
    EXTERNAL_URL_KEY(overrides?: CallOverrides): Promise<string>;
    GIF_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
    IMAGE_DATA_KEY(overrides?: CallOverrides): Promise<string>;
    IMAGE_KEY(overrides?: CallOverrides): Promise<string>;
    JSON_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
    METADATA_RENDER_TYPE(overrides?: CallOverrides): Promise<string>;
    MIDDLEWARE_RENDER_TYPE(overrides?: CallOverrides): Promise<string>;
    NAME_KEY(overrides?: CallOverrides): Promise<string>;
    SVG_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
    array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
    decodeContractMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    decodeMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string
    ] & {
        nft: string;
        tokenId: BigNumber;
        seed: string;
    }>;
    delimit(values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
    encodeJson(content: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getAttributeObjectWithDisplayType(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getAttributeObjectWithDisplayTypeAndMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getAttributeObjectWithMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getBaseAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, extra: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    keyValue(key: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    object(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
    stringWrap(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ANIMATION_URL_KEY(overrides?: CallOverrides): Promise<string>;
        ATTRIBUTES_KEY(overrides?: CallOverrides): Promise<string>;
        BACKGROUND_COLOR_KEY(overrides?: CallOverrides): Promise<string>;
        DESCRIPTION_KEY(overrides?: CallOverrides): Promise<string>;
        EXTERNAL_URL_KEY(overrides?: CallOverrides): Promise<string>;
        GIF_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
        IMAGE_DATA_KEY(overrides?: CallOverrides): Promise<string>;
        IMAGE_KEY(overrides?: CallOverrides): Promise<string>;
        JSON_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
        METADATA_RENDER_TYPE(overrides?: CallOverrides): Promise<string>;
        MIDDLEWARE_RENDER_TYPE(overrides?: CallOverrides): Promise<string>;
        NAME_KEY(overrides?: CallOverrides): Promise<string>;
        SVG_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<string>;
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        decodeContractMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        decodeMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string
        ] & {
            nft: string;
            tokenId: BigNumber;
            seed: string;
        }>;
        delimit(values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        encodeJson(content: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getAttributeObjectWithDisplayType(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getAttributeObjectWithDisplayTypeAndMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getAttributeObjectWithMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getBaseAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, extra: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        keyValue(key: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        object(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        stringWrap(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ANIMATION_URL_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        ATTRIBUTES_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        BACKGROUND_COLOR_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        DESCRIPTION_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        EXTERNAL_URL_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        GIF_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_DATA_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        IMAGE_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        JSON_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;
        METADATA_RENDER_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        MIDDLEWARE_RENDER_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        NAME_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        SVG_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        decodeContractMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decodeMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        delimit(values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        encodeJson(content: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAttributeObjectWithDisplayType(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAttributeObjectWithDisplayTypeAndMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAttributeObjectWithMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, extra: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        keyValue(key: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        object(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        stringWrap(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ANIMATION_URL_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ATTRIBUTES_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BACKGROUND_COLOR_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DESCRIPTION_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXTERNAL_URL_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GIF_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_DATA_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IMAGE_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        JSON_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        METADATA_RENDER_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIDDLEWARE_RENDER_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NAME_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SVG_DATA_BASE_64_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeContractMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeMetadataProps(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delimit(values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeJson(content: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAttributeObjectWithDisplayType(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAttributeObjectWithDisplayTypeAndMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, displayType: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAttributeObjectWithMaxValue(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, maxValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseAttributeObject(traitType: PromiseOrValue<string>, value: PromiseOrValue<string>, extra: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyValue(key: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        object(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stringWrap(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC721ZUtils.d.ts.map
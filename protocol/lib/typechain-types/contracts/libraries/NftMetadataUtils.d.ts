import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface NftMetadataUtilsInterface extends utils.Interface {
    functions: {
        "array(string[])": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "array" | "delimit" | "encodeJson" | "getAttributeObject" | "getAttributeObjectWithDisplayType" | "getAttributeObjectWithDisplayTypeAndMaxValue" | "getAttributeObjectWithMaxValue" | "getBaseAttributeObject" | "keyValue" | "object" | "stringWrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "array", values: [PromiseOrValue<string>[]]): string;
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
    decodeFunctionResult(functionFragment: "array", data: BytesLike): Result;
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
export interface NftMetadataUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NftMetadataUtilsInterface;
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
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[string]>;
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
    array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
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
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
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
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
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
        array(content: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
//# sourceMappingURL=NftMetadataUtils.d.ts.map
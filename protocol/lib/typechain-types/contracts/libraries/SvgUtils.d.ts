import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface SvgUtilsInterface extends utils.Interface {
    functions: {
        "DECIMALS()": FunctionFragment;
        "ONE_UNIT()": FunctionFragment;
        "decimals(uint256)": FunctionFragment;
        "lerpWithDecimals(uint256,uint256,bytes1)": FunctionFragment;
        "padZeros(string,uint256)": FunctionFragment;
        "toColorHexString(uint256)": FunctionFragment;
        "toColorHexStringByBytes(bytes1,bytes1,bytes1)": FunctionFragment;
        "toColorHexStringByBytes3(bytes3)": FunctionFragment;
        "toDecimalString(uint256)": FunctionFragment;
        "wholeNumber(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DECIMALS" | "ONE_UNIT" | "decimals" | "lerpWithDecimals" | "padZeros" | "toColorHexString" | "toColorHexStringByBytes" | "toColorHexStringByBytes3" | "toDecimalString" | "wholeNumber"): FunctionFragment;
    encodeFunctionData(functionFragment: "DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONE_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lerpWithDecimals", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "padZeros", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toColorHexString", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toColorHexStringByBytes", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "toColorHexStringByBytes3", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "toDecimalString", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "wholeNumber", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONE_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lerpWithDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "padZeros", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toColorHexString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toColorHexStringByBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toColorHexStringByBytes3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toDecimalString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wholeNumber", data: BytesLike): Result;
    events: {};
}
export interface SvgUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SvgUtilsInterface;
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
        DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;
        ONE_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lerpWithDecimals(min: PromiseOrValue<BigNumberish>, max: PromiseOrValue<BigNumberish>, scale: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        padZeros(s: PromiseOrValue<string>, len: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        toColorHexString(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        toColorHexStringByBytes(r: PromiseOrValue<BytesLike>, g: PromiseOrValue<BytesLike>, b: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        toColorHexStringByBytes3(rgb: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        toDecimalString(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            s: string;
        }>;
        wholeNumber(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
    ONE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    decimals(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    lerpWithDecimals(min: PromiseOrValue<BigNumberish>, max: PromiseOrValue<BigNumberish>, scale: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    padZeros(s: PromiseOrValue<string>, len: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    toColorHexString(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    toColorHexStringByBytes(r: PromiseOrValue<BytesLike>, g: PromiseOrValue<BytesLike>, b: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    toColorHexStringByBytes3(rgb: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    toDecimalString(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    wholeNumber(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        ONE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lerpWithDecimals(min: PromiseOrValue<BigNumberish>, max: PromiseOrValue<BigNumberish>, scale: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        padZeros(s: PromiseOrValue<string>, len: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        toColorHexString(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        toColorHexStringByBytes(r: PromiseOrValue<BytesLike>, g: PromiseOrValue<BytesLike>, b: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        toColorHexStringByBytes3(rgb: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        toDecimalString(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        wholeNumber(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        ONE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lerpWithDecimals(min: PromiseOrValue<BigNumberish>, max: PromiseOrValue<BigNumberish>, scale: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        padZeros(s: PromiseOrValue<string>, len: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        toColorHexString(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        toColorHexStringByBytes(r: PromiseOrValue<BytesLike>, g: PromiseOrValue<BytesLike>, b: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        toColorHexStringByBytes3(rgb: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        toDecimalString(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        wholeNumber(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ONE_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lerpWithDecimals(min: PromiseOrValue<BigNumberish>, max: PromiseOrValue<BigNumberish>, scale: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        padZeros(s: PromiseOrValue<string>, len: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toColorHexString(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toColorHexStringByBytes(r: PromiseOrValue<BytesLike>, g: PromiseOrValue<BytesLike>, b: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toColorHexStringByBytes3(rgb: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toDecimalString(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wholeNumber(n: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SvgUtils.d.ts.map
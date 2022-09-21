import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface AbsBrainFuckTreasuryUtilsInterface extends utils.Interface {
    functions: {
        "DISTRIBUTOR_FEE()": FunctionFragment;
        "decodeRenderersAndFees(bytes)": FunctionFragment;
        "encodeRenderersAndFees(address[],uint32[])": FunctionFragment;
        "getSplitParams(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DISTRIBUTOR_FEE" | "decodeRenderersAndFees" | "encodeRenderersAndFees" | "getSplitParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "DISTRIBUTOR_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "decodeRenderersAndFees", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encodeRenderersAndFees", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getSplitParams", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "DISTRIBUTOR_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeRenderersAndFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeRenderersAndFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSplitParams", data: BytesLike): Result;
    events: {};
}
export interface AbsBrainFuckTreasuryUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbsBrainFuckTreasuryUtilsInterface;
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
        DISTRIBUTOR_FEE(overrides?: CallOverrides): Promise<[number]>;
        decodeRenderersAndFees(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[]] & {
            renderers: string[];
            fees: number[];
        }>;
        encodeRenderersAndFees(renderers: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        getSplitParams(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[], number]>;
    };
    DISTRIBUTOR_FEE(overrides?: CallOverrides): Promise<number>;
    decodeRenderersAndFees(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[]] & {
        renderers: string[];
        fees: number[];
    }>;
    encodeRenderersAndFees(renderers: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<string>;
    getSplitParams(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[], number]>;
    callStatic: {
        DISTRIBUTOR_FEE(overrides?: CallOverrides): Promise<number>;
        decodeRenderersAndFees(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[]] & {
            renderers: string[];
            fees: number[];
        }>;
        encodeRenderersAndFees(renderers: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<string>;
        getSplitParams(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string[], number[], number]>;
    };
    filters: {};
    estimateGas: {
        DISTRIBUTOR_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        decodeRenderersAndFees(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeRenderersAndFees(renderers: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getSplitParams(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DISTRIBUTOR_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeRenderersAndFees(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeRenderersAndFees(renderers: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSplitParams(props: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AbsBrainFuckTreasuryUtils.d.ts.map
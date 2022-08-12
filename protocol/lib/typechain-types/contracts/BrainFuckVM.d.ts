import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BrainFuckVMInterface extends utils.Interface {
    functions: {
        "LOOPING_STACK_SIZE()": FunctionFragment;
        "TAPE_SIZE()": FunctionFragment;
        "run(bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "LOOPING_STACK_SIZE" | "TAPE_SIZE" | "run"): FunctionFragment;
    encodeFunctionData(functionFragment: "LOOPING_STACK_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TAPE_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "run", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "LOOPING_STACK_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TAPE_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
    events: {};
}
export interface BrainFuckVM extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BrainFuckVMInterface;
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
        LOOPING_STACK_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        TAPE_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        run(code: PromiseOrValue<BytesLike>, input: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            out: string;
        }>;
    };
    LOOPING_STACK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    TAPE_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    run(code: PromiseOrValue<BytesLike>, input: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        LOOPING_STACK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        TAPE_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        run(code: PromiseOrValue<BytesLike>, input: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        LOOPING_STACK_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        TAPE_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        run(code: PromiseOrValue<BytesLike>, input: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        LOOPING_STACK_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TAPE_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        run(code: PromiseOrValue<BytesLike>, input: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BrainFuckVM.d.ts.map
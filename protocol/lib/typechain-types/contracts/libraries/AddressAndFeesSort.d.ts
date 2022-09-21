import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface AddressAndFeesSortInterface extends utils.Interface {
    functions: {
        "sort(address[],uint32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "sort"): FunctionFragment;
    encodeFunctionData(functionFragment: "sort", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: "sort", data: BytesLike): Result;
    events: {};
}
export interface AddressAndFeesSort extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressAndFeesSortInterface;
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
        sort(accounts: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            string[],
            number[]
        ] & {
            sortedAccounts: string[];
            sortedFees: number[];
        }>;
    };
    sort(accounts: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
        string[],
        number[]
    ] & {
        sortedAccounts: string[];
        sortedFees: number[];
    }>;
    callStatic: {
        sort(accounts: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            string[],
            number[]
        ] & {
            sortedAccounts: string[];
            sortedFees: number[];
        }>;
    };
    filters: {};
    estimateGas: {
        sort(accounts: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        sort(accounts: PromiseOrValue<string>[], fees: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AddressAndFeesSort.d.ts.map
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface AddressSortInterface extends utils.Interface {
    functions: {
        "sort(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "sort"): FunctionFragment;
    encodeFunctionData(functionFragment: "sort", values: [PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "sort", data: BytesLike): Result;
    events: {};
}
export interface AddressSort extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressSortInterface;
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
        sort(data: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[string[]] & {
            updatedData: string[];
        }>;
    };
    sort(data: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        sort(data: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        sort(data: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        sort(data: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AddressSort.d.ts.map
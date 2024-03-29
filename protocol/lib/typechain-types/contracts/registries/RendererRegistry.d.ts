import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface RendererRegistryInterface extends utils.Interface {
    functions: {
        "addressToId(address)": FunctionFragment;
        "editRenderer(address,address)": FunctionFragment;
        "idCounter()": FunctionFragment;
        "idToAddress(uint256)": FunctionFragment;
        "registerRenderer(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressToId" | "editRenderer" | "idCounter" | "idToAddress" | "registerRenderer"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressToId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "editRenderer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "idCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "idToAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerRenderer", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addressToId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerRenderer", data: BytesLike): Result;
    events: {
        "RegisteredRenderer(uint256,address,uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RegisteredRenderer"): EventFragment;
}
export interface RegisteredRendererEventObject {
    id: BigNumber;
    renderer: string;
    propsSize: BigNumber;
    additionalMetadataURI: string;
}
export declare type RegisteredRendererEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string
], RegisteredRendererEventObject>;
export declare type RegisteredRendererEventFilter = TypedEventFilter<RegisteredRendererEvent>;
export interface RendererRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RendererRegistryInterface;
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
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        idCounter(overrides?: CallOverrides): Promise<[BigNumber]>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    idCounter(overrides?: CallOverrides): Promise<BigNumber>;
    idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        idCounter(overrides?: CallOverrides): Promise<BigNumber>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RegisteredRenderer(uint256,address,uint256,string)"(id?: null, renderer?: null, propsSize?: null, additionalMetadataURI?: null): RegisteredRendererEventFilter;
        RegisteredRenderer(id?: null, renderer?: null, propsSize?: null, additionalMetadataURI?: null): RegisteredRendererEventFilter;
    };
    estimateGas: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        idCounter(overrides?: CallOverrides): Promise<BigNumber>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        idCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RendererRegistry.d.ts.map
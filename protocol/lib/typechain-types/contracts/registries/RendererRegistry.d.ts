import type { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../../common";
export interface RendererRegistryInterface extends utils.Interface {
    functions: {
        "addressToId(address)": FunctionFragment;
        "createPackage(string)": FunctionFragment;
        "editPackageByNamesAndIds(string,string[],uint256[])": FunctionFragment;
        "editPackageByNamesAndRenderers(string,string[],address[])": FunctionFragment;
        "editPackageByRenderer(string,address[])": FunctionFragment;
        "editRenderer(address,address)": FunctionFragment;
        "idCounter()": FunctionFragment;
        "idToAddress(uint256)": FunctionFragment;
        "packageManager(string)": FunctionFragment;
        "packages(string,string)": FunctionFragment;
        "registerRenderer(address)": FunctionFragment;
        "transferPackageManager(string,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressToId" | "createPackage" | "editPackageByNamesAndIds" | "editPackageByNamesAndRenderers" | "editPackageByRenderer" | "editRenderer" | "idCounter" | "idToAddress" | "packageManager" | "packages" | "registerRenderer" | "transferPackageManager"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressToId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createPackage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "editPackageByNamesAndIds", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "editPackageByNamesAndRenderers", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "editPackageByRenderer", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "editRenderer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "idCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "idToAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "packageManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "packages", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerRenderer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferPackageManager", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addressToId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPackage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editPackageByNamesAndIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editPackageByNamesAndRenderers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editPackageByRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "editRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "packageManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "packages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferPackageManager", data: BytesLike): Result;
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
        createPackage(packageName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        editPackageByNamesAndIds(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        editPackageByNamesAndRenderers(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        editPackageByRenderer(packageName: PromiseOrValue<string>, renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        idCounter(overrides?: CallOverrides): Promise<[BigNumber]>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        packageManager(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        packages(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferPackageManager(packageName: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    createPackage(packageName: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    editPackageByNamesAndIds(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    editPackageByNamesAndRenderers(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], renderers: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    editPackageByRenderer(packageName: PromiseOrValue<string>, renderers: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    idCounter(overrides?: CallOverrides): Promise<BigNumber>;
    idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    packageManager(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    packages(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferPackageManager(packageName: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createPackage(packageName: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        editPackageByNamesAndIds(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        editPackageByNamesAndRenderers(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], renderers: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        editPackageByRenderer(packageName: PromiseOrValue<string>, renderers: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        idCounter(overrides?: CallOverrides): Promise<BigNumber>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        packageManager(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        packages(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferPackageManager(packageName: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RegisteredRenderer(uint256,address,uint256,string)"(id?: null, renderer?: null, propsSize?: null, additionalMetadataURI?: null): RegisteredRendererEventFilter;
        RegisteredRenderer(id?: null, renderer?: null, propsSize?: null, additionalMetadataURI?: null): RegisteredRendererEventFilter;
    };
    estimateGas: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createPackage(packageName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        editPackageByNamesAndIds(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        editPackageByNamesAndRenderers(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        editPackageByRenderer(packageName: PromiseOrValue<string>, renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        idCounter(overrides?: CallOverrides): Promise<BigNumber>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        packageManager(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        packages(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferPackageManager(packageName: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addressToId(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPackage(packageName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        editPackageByNamesAndIds(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        editPackageByNamesAndRenderers(packageName: PromiseOrValue<string>, names: PromiseOrValue<string>[], renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        editPackageByRenderer(packageName: PromiseOrValue<string>, renderers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        editRenderer(_oldRenderer: PromiseOrValue<string>, _renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        idCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idToAddress(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        packageManager(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        packages(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerRenderer(_renderer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferPackageManager(packageName: PromiseOrValue<string>, newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RendererRegistry.d.ts.map
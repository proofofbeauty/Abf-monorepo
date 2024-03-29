import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface BrainFuckURIConstructorInterface extends utils.Interface {
    functions: {
        "contractURI(string,address)": FunctionFragment;
        "debug(bytes,uint256)": FunctionFragment;
        "tokenSeed(bytes,uint256,bytes32)": FunctionFragment;
        "tokenURI(uint256,string,bytes,bytes32,bytes,IRenderer)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "contractURI" | "debug" | "tokenSeed" | "tokenURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "contractURI", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "debug", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenSeed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debug", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenSeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {};
}
export interface BrainFuckURIConstructor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BrainFuckURIConstructorInterface;
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
        contractURI(name: PromiseOrValue<string>, nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        debug(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        tokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, seed: PromiseOrValue<BytesLike>, constants: PromiseOrValue<BytesLike>, code: PromiseOrValue<BytesLike>, renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    contractURI(name: PromiseOrValue<string>, nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    debug(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    tokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, seed: PromiseOrValue<BytesLike>, constants: PromiseOrValue<BytesLike>, code: PromiseOrValue<BytesLike>, renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        contractURI(name: PromiseOrValue<string>, nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        debug(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        tokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, seed: PromiseOrValue<BytesLike>, constants: PromiseOrValue<BytesLike>, code: PromiseOrValue<BytesLike>, renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        contractURI(name: PromiseOrValue<string>, nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        debug(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, seed: PromiseOrValue<BytesLike>, constants: PromiseOrValue<BytesLike>, code: PromiseOrValue<BytesLike>, renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        contractURI(name: PromiseOrValue<string>, nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debug(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenSeed(seed: PromiseOrValue<BytesLike>, tokenId: PromiseOrValue<BigNumberish>, constants: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, seed: PromiseOrValue<BytesLike>, constants: PromiseOrValue<BytesLike>, code: PromiseOrValue<BytesLike>, renderer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BrainFuckURIConstructor.d.ts.map
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace BrainFuckFactory {
  export type CreateBrainFuckNFTConfigStruct = {
    name: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
    seed: PromiseOrValue<BytesLike>;
    constants: PromiseOrValue<BytesLike>;
    code: PromiseOrValue<BytesLike>;
    renderer: PromiseOrValue<string>;
    mintingSupply: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    royaltyFraction: PromiseOrValue<BigNumberish>;
    rendererRoyaltyFraction: PromiseOrValue<BigNumberish>;
    whitelistToken: PromiseOrValue<string>;
  };

  export type CreateBrainFuckNFTConfigStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    name: string;
    symbol: string;
    seed: string;
    constants: string;
    code: string;
    renderer: string;
    mintingSupply: BigNumber;
    price: BigNumber;
    royaltyFraction: BigNumber;
    rendererRoyaltyFraction: BigNumber;
    whitelistToken: string;
  };
}

export interface BrainFuckFactoryInterface extends utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "createNFT((string,string,bytes,bytes32,bytes,address,uint256,uint256,uint96,uint96,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "VERSION" | "createNFT"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createNFT",
    values: [BrainFuckFactory.CreateBrainFuckNFTConfigStruct]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createNFT", data: BytesLike): Result;

  events: {
    "CreatedBrainFuckNFT(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedBrainFuckNFT"): EventFragment;
}

export interface CreatedBrainFuckNFTEventObject {
  nft: string;
  creator: string;
}
export type CreatedBrainFuckNFTEvent = TypedEvent<
  [string, string],
  CreatedBrainFuckNFTEventObject
>;

export type CreatedBrainFuckNFTEventFilter =
  TypedEventFilter<CreatedBrainFuckNFTEvent>;

export interface BrainFuckFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrainFuckFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  createNFT(
    config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "CreatedBrainFuckNFT(address,address)"(
      nft?: null,
      creator?: null
    ): CreatedBrainFuckNFTEventFilter;
    CreatedBrainFuckNFT(
      nft?: null,
      creator?: null
    ): CreatedBrainFuckNFTEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../common';

export interface BrainFuckURIConstructorInterface extends utils.Interface {
  functions: {
    'SEED_CONSTANTS_TYPE_MASK()': FunctionFragment;
    'contractURI(string,address)': FunctionFragment;
    'tokenSeed(bytes,uint256,bytes8)': FunctionFragment;
    'tokenURI(uint256,string,bytes,bytes8,bytes,IRenderer)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'SEED_CONSTANTS_TYPE_MASK'
      | 'contractURI'
      | 'tokenSeed'
      | 'tokenURI',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'SEED_CONSTANTS_TYPE_MASK',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'contractURI',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenSeed',
    values: [BytesLike, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenURI',
    values: [BigNumberish, string, BytesLike, BytesLike, BytesLike, string],
  ): string;

  decodeFunctionResult(
    functionFragment: 'SEED_CONSTANTS_TYPE_MASK',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'contractURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'tokenSeed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;

  events: {};
}

export interface BrainFuckURIConstructor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrainFuckURIConstructorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    SEED_CONSTANTS_TYPE_MASK(overrides?: CallOverrides): Promise<[string]>;

    contractURI(
      name: string,
      nft: string,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    tokenSeed(
      seed: BytesLike,
      tokenId: BigNumberish,
      constants: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      name: string,
      seed: BytesLike,
      constants: BytesLike,
      code: BytesLike,
      renderer: string,
      overrides?: CallOverrides,
    ): Promise<[string]>;
  };

  SEED_CONSTANTS_TYPE_MASK(overrides?: CallOverrides): Promise<string>;

  contractURI(
    name: string,
    nft: string,
    overrides?: CallOverrides,
  ): Promise<string>;

  tokenSeed(
    seed: BytesLike,
    tokenId: BigNumberish,
    constants: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;

  tokenURI(
    tokenId: BigNumberish,
    name: string,
    seed: BytesLike,
    constants: BytesLike,
    code: BytesLike,
    renderer: string,
    overrides?: CallOverrides,
  ): Promise<string>;

  callStatic: {
    SEED_CONSTANTS_TYPE_MASK(overrides?: CallOverrides): Promise<string>;

    contractURI(
      name: string,
      nft: string,
      overrides?: CallOverrides,
    ): Promise<string>;

    tokenSeed(
      seed: BytesLike,
      tokenId: BigNumberish,
      constants: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    tokenURI(
      tokenId: BigNumberish,
      name: string,
      seed: BytesLike,
      constants: BytesLike,
      code: BytesLike,
      renderer: string,
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    SEED_CONSTANTS_TYPE_MASK(overrides?: CallOverrides): Promise<BigNumber>;

    contractURI(
      name: string,
      nft: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenSeed(
      seed: BytesLike,
      tokenId: BigNumberish,
      constants: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      name: string,
      seed: BytesLike,
      constants: BytesLike,
      code: BytesLike,
      renderer: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SEED_CONSTANTS_TYPE_MASK(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    contractURI(
      name: string,
      nft: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenSeed(
      seed: BytesLike,
      tokenId: BigNumberish,
      constants: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      name: string,
      seed: BytesLike,
      constants: BytesLike,
      code: BytesLike,
      renderer: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}

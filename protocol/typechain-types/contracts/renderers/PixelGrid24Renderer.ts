/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  EventFragment,
  FunctionFragment,
  Result,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  OnEvent,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../common';

export interface PixelGrid24RendererInterface extends utils.Interface {
  functions: {
    'additionalMetadataURI()': FunctionFragment;
    'attributes(bytes)': FunctionFragment;
    'owner()': FunctionFragment;
    'propsSize()': FunctionFragment;
    'render(bytes)': FunctionFragment;
    'renderAttributeKey()': FunctionFragment;
    'renderRaw(bytes)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'additionalMetadataURI'
      | 'attributes'
      | 'owner'
      | 'propsSize'
      | 'render'
      | 'renderAttributeKey'
      | 'renderRaw'
      | 'renounceOwnership'
      | 'supportsInterface'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'additionalMetadataURI',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'attributes',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'propsSize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'render', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'renderAttributeKey',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'renderRaw',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;

  decodeFunctionResult(
    functionFragment: 'additionalMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'attributes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'propsSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'render', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renderAttributeKey',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'renderRaw', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PixelGrid24Renderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PixelGrid24RendererInterface;

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
    additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    attributes(props: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    propsSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    render(props: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    renderAttributeKey(overrides?: CallOverrides): Promise<[string]>;

    renderRaw(props: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

  attributes(props: BytesLike, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  propsSize(overrides?: CallOverrides): Promise<BigNumber>;

  render(props: BytesLike, overrides?: CallOverrides): Promise<string>;

  renderAttributeKey(overrides?: CallOverrides): Promise<string>;

  renderRaw(props: BytesLike, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

    attributes(props: BytesLike, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    propsSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(props: BytesLike, overrides?: CallOverrides): Promise<string>;

    renderAttributeKey(overrides?: CallOverrides): Promise<string>;

    renderRaw(props: BytesLike, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    attributes(props: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    propsSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(props: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renderAttributeKey(overrides?: CallOverrides): Promise<BigNumber>;

    renderRaw(props: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    additionalMetadataURI(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    attributes(
      props: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propsSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      props: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderAttributeKey(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderRaw(
      props: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}

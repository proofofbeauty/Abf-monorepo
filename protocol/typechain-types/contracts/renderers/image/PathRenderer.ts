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
  PromiseOrValue,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../../../common';

export interface PathRendererInterface extends utils.Interface {
  functions: {
    'additionalMetadataURI()': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'propsSize()': FunctionFragment;
    'render(bytes)': FunctionFragment;
    'renderRaw(bytes)': FunctionFragment;
    'renderType()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'additionalMetadataURI'
      | 'name'
      | 'owner'
      | 'propsSize'
      | 'render'
      | 'renderRaw'
      | 'renderType'
      | 'renounceOwnership'
      | 'supportsInterface'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'additionalMetadataURI',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'propsSize', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'render',
    values: [PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'renderRaw',
    values: [PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'renderType',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(
    functionFragment: 'additionalMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'propsSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'render', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renderRaw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renderType', data: BytesLike): Result;
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

export interface PathRenderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PathRendererInterface;

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

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    propsSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    render(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    renderRaw(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    renderType(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  propsSize(overrides?: CallOverrides): Promise<BigNumber>;

  render(
    props: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<string>;

  renderRaw(
    props: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<string>;

  renderType(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    propsSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<string>;

    renderRaw(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<string>;

    renderType(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    propsSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renderRaw(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renderType(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    additionalMetadataURI(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propsSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderRaw(
      props: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}

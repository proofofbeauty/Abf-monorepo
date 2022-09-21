/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider } from '@ethersproject/providers';
import { Contract, Signer, utils } from 'ethers';
import type {
  IRendererPayable,
  IRendererPayableInterface,
} from '../../../contracts/interfaces/IRendererPayable';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'createTreasury',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'treasury',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IRendererPayable__factory {
  static readonly abi = _abi;
  static createInterface(): IRendererPayableInterface {
    return new utils.Interface(_abi) as IRendererPayableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IRendererPayable {
    return new Contract(address, _abi, signerOrProvider) as IRendererPayable;
  }
}

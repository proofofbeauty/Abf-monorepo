/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';
import { ethers } from 'ethers';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: 'IERC2981',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: 'ERC2981',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'BrainFuck',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BrainFuck__factory>;
    getContractFactory(
      name: 'BrainFuckFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BrainFuckFactory__factory>;
    getContractFactory(
      name: 'BrainFuckURIConstructor',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BrainFuckURIConstructor__factory>;
    getContractFactory(
      name: 'BrainFuckVM',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BrainFuckVM__factory>;
    getContractFactory(
      name: 'ERC721APausable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721APausable__factory>;
    getContractFactory(
      name: 'IRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IRenderer__factory>;
    getContractFactory(
      name: 'Bytecode',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Bytecode__factory>;
    getContractFactory(
      name: 'Create3',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Create3__factory>;
    getContractFactory(
      name: 'SSTORE2Map',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.SSTORE2Map__factory>;
    getContractFactory(
      name: 'SvgUtils',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.SvgUtils__factory>;
    getContractFactory(
      name: 'RendererRegistry',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.RendererRegistry__factory>;
    getContractFactory(
      name: 'AlphaFilterRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlphaFilterRenderer__factory>;
    getContractFactory(
      name: 'BackgroundSvgRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BackgroundSvgRenderer__factory>;
    getContractFactory(
      name: 'ConfiguredGifImageRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ConfiguredGifImageRenderer__factory>;
    getContractFactory(
      name: 'DotMatrixRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.DotMatrixRenderer__factory>;
    getContractFactory(
      name: 'GifImageRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.GifImageRenderer__factory>;
    getContractFactory(
      name: 'HSLPixelGrid16Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.HSLPixelGrid16Renderer__factory>;
    getContractFactory(
      name: 'HSLPixelGrid24Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.HSLPixelGrid24Renderer__factory>;
    getContractFactory(
      name: 'HSLPixelGrid8Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.HSLPixelGrid8Renderer__factory>;
    getContractFactory(
      name: 'IdentityRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IdentityRenderer__factory>;
    getContractFactory(
      name: 'ImageTupleDataMiddlewareRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ImageTupleDataMiddlewareRenderer__factory>;
    getContractFactory(
      name: 'MonoPixelGrid16Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MonoPixelGrid16Renderer__factory>;
    getContractFactory(
      name: 'MonoPixelGrid24Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MonoPixelGrid24Renderer__factory>;
    getContractFactory(
      name: 'MonoPixelGrid8Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MonoPixelGrid8Renderer__factory>;
    getContractFactory(
      name: 'PathRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PathRenderer__factory>;
    getContractFactory(
      name: 'PixelGrid16Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PixelGrid16Renderer__factory>;
    getContractFactory(
      name: 'PixelGrid24Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PixelGrid24Renderer__factory>;
    getContractFactory(
      name: 'PixelGrid8Renderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PixelGrid8Renderer__factory>;
    getContractFactory(
      name: 'ERC721A',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721A__factory>;

    getContractAt(
      name: 'Ownable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: 'IERC2981',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: 'Pausable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: 'ERC2981',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: 'ERC721',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: 'IERC721Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: 'IERC721',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: 'IERC721Receiver',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: 'ERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'BrainFuck',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BrainFuck>;
    getContractAt(
      name: 'BrainFuckFactory',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BrainFuckFactory>;
    getContractAt(
      name: 'BrainFuckURIConstructor',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BrainFuckURIConstructor>;
    getContractAt(
      name: 'BrainFuckVM',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BrainFuckVM>;
    getContractAt(
      name: 'ERC721APausable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721APausable>;
    getContractAt(
      name: 'IRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IRenderer>;
    getContractAt(
      name: 'Bytecode',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Bytecode>;
    getContractAt(
      name: 'Create3',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Create3>;
    getContractAt(
      name: 'SSTORE2Map',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.SSTORE2Map>;
    getContractAt(
      name: 'SvgUtils',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.SvgUtils>;
    getContractAt(
      name: 'RendererRegistry',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.RendererRegistry>;
    getContractAt(
      name: 'AlphaFilterRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlphaFilterRenderer>;
    getContractAt(
      name: 'BackgroundSvgRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BackgroundSvgRenderer>;
    getContractAt(
      name: 'ConfiguredGifImageRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ConfiguredGifImageRenderer>;
    getContractAt(
      name: 'DotMatrixRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.DotMatrixRenderer>;
    getContractAt(
      name: 'GifImageRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.GifImageRenderer>;
    getContractAt(
      name: 'HSLPixelGrid16Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.HSLPixelGrid16Renderer>;
    getContractAt(
      name: 'HSLPixelGrid24Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.HSLPixelGrid24Renderer>;
    getContractAt(
      name: 'HSLPixelGrid8Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.HSLPixelGrid8Renderer>;
    getContractAt(
      name: 'IdentityRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IdentityRenderer>;
    getContractAt(
      name: 'ImageTupleDataMiddlewareRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ImageTupleDataMiddlewareRenderer>;
    getContractAt(
      name: 'MonoPixelGrid16Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MonoPixelGrid16Renderer>;
    getContractAt(
      name: 'MonoPixelGrid24Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MonoPixelGrid24Renderer>;
    getContractAt(
      name: 'MonoPixelGrid8Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MonoPixelGrid8Renderer>;
    getContractAt(
      name: 'PathRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PathRenderer>;
    getContractAt(
      name: 'PixelGrid16Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PixelGrid16Renderer>;
    getContractAt(
      name: 'PixelGrid24Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PixelGrid24Renderer>;
    getContractAt(
      name: 'PixelGrid8Renderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PixelGrid8Renderer>;
    getContractAt(
      name: 'ERC721A',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
  }
}

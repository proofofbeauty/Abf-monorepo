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
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
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
      name: 'AbsBrainFuckFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AbsBrainFuckFactory__factory>;
    getContractFactory(
      name: 'ERC721ZMinter',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721ZMinter__factory>;
    getContractFactory(
      name: 'IDataStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IDataStorage__factory>;
    getContractFactory(
      name: 'IRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IRenderer__factory>;
    getContractFactory(
      name: 'IVirtualMachine',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IVirtualMachine__factory>;
    getContractFactory(
      name: 'Bytecode',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Bytecode__factory>;
    getContractFactory(
      name: 'Create3',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Create3__factory>;
    getContractFactory(
      name: 'ERC721ZUtils',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721ZUtils__factory>;
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
      name: 'AbsBrainFuckContractMetadataRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AbsBrainFuckContractMetadataRenderer__factory>;
    getContractFactory(
      name: 'AbsBrainFuckMetadataRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AbsBrainFuckMetadataRenderer__factory>;
    getContractFactory(
      name: 'ImageBasedLayerCompositeRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ImageBasedLayerCompositeRenderer__factory>;
    getContractFactory(
      name: 'LayerCompositeRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.LayerCompositeRenderer__factory>;
    getContractFactory(
      name: 'IdentityRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IdentityRenderer__factory>;
    getContractFactory(
      name: 'AnimatedGifImageRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AnimatedGifImageRenderer__factory>;
    getContractFactory(
      name: 'BackgroundSvgRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BackgroundSvgRenderer__factory>;
    getContractFactory(
      name: 'CompressedAnimatedGifRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.CompressedAnimatedGifRenderer__factory>;
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
      name: 'CompactMiddlewareRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.CompactMiddlewareRenderer__factory>;
    getContractFactory(
      name: 'MiddlewareRenderer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MiddlewareRenderer__factory>;
    getContractFactory(
      name: 'AdminEditableStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AdminEditableStorage__factory>;
    getContractFactory(
      name: 'ChunkedDataStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ChunkedDataStorage__factory>;
    getContractFactory(
      name: 'EfficientChunkedDataStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.EfficientChunkedDataStorage__factory>;
    getContractFactory(
      name: 'IndexedDataStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IndexedDataStorage__factory>;
    getContractFactory(
      name: 'KeyDataStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.KeyDataStorage__factory>;
    getContractFactory(
      name: 'ERC721A',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: 'ERC721Z',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721Z__factory>;
    getContractFactory(
      name: 'BrainFuckVM',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.BrainFuckVM__factory>;

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
      name: 'ERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: 'IERC20Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
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
      name: 'AbsBrainFuckFactory',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AbsBrainFuckFactory>;
    getContractAt(
      name: 'ERC721ZMinter',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721ZMinter>;
    getContractAt(
      name: 'IDataStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IDataStorage>;
    getContractAt(
      name: 'IRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IRenderer>;
    getContractAt(
      name: 'IVirtualMachine',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IVirtualMachine>;
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
      name: 'ERC721ZUtils',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721ZUtils>;
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
      name: 'AbsBrainFuckContractMetadataRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AbsBrainFuckContractMetadataRenderer>;
    getContractAt(
      name: 'AbsBrainFuckMetadataRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AbsBrainFuckMetadataRenderer>;
    getContractAt(
      name: 'ImageBasedLayerCompositeRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ImageBasedLayerCompositeRenderer>;
    getContractAt(
      name: 'LayerCompositeRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.LayerCompositeRenderer>;
    getContractAt(
      name: 'IdentityRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IdentityRenderer>;
    getContractAt(
      name: 'AnimatedGifImageRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AnimatedGifImageRenderer>;
    getContractAt(
      name: 'BackgroundSvgRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BackgroundSvgRenderer>;
    getContractAt(
      name: 'CompressedAnimatedGifRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.CompressedAnimatedGifRenderer>;
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
      name: 'CompactMiddlewareRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.CompactMiddlewareRenderer>;
    getContractAt(
      name: 'MiddlewareRenderer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MiddlewareRenderer>;
    getContractAt(
      name: 'AdminEditableStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AdminEditableStorage>;
    getContractAt(
      name: 'ChunkedDataStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ChunkedDataStorage>;
    getContractAt(
      name: 'EfficientChunkedDataStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.EfficientChunkedDataStorage>;
    getContractAt(
      name: 'IndexedDataStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IndexedDataStorage>;
    getContractAt(
      name: 'KeyDataStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.KeyDataStorage>;
    getContractAt(
      name: 'ERC721A',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: 'ERC721Z',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721Z>;
    getContractAt(
      name: 'BrainFuckVM',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.BrainFuckVM>;

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

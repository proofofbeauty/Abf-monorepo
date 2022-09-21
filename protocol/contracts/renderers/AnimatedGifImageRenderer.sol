// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import '../interfaces/IRenderer.sol';
import '../libraries/AbsBrainFuckConstants.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Base64.sol';
import '@openzeppelin/contracts/utils/introspection/ERC165.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract AnimatedGifImageRenderer is IRenderer, Ownable, ERC165 {
  using Strings for uint256;

  bytes public constant GIF_89_A = hex'474946383961';
  bytes public constant APPLICATION_EXTENSION =
    hex'21FF0B4E45545343415045322E300301FFFF00';
  bytes public constant GRAPHIC_CONTROL_EXTENSION = hex'21F904090A000000';
  bytes public constant IMAGE_DESCRIPTOR = hex'2C00000000800080000007';

  uint256 public IMAGE_DATA_CHUNK_SIZE = 126;

  uint256 public WIDTH_INDEX = 0;
  uint256 public HEIGHT_INDEX = 1;
  uint256 public NUM_COLORS_INDEX = 2;

  function owner() public view override(Ownable, IRenderer) returns (address) {
    return super.owner();
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC165, IERC165)
    returns (bool)
  {
    return
      interfaceId == type(IRenderer).interfaceId ||
      super.supportsInterface(interfaceId);
  }

  function propsSize() external pure override returns (uint256) {
    return 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;
  }

  function additionalMetadataURI()
    external
    pure
    override
    returns (string memory)
  {
    return 'ipfs://bafkreicoe7rlsewtos62vt765vrdrlkm4q5lx7p3j53mf5kf3xy3cez2dy';
  }

  function renderType() external pure override returns (string memory) {
    return AbsBrainFuckConstants.IMAGE_RENDER_TYPE;
  }

  function name() public pure override returns (string memory) {
    return 'Multi Frame gif';
  }

  function getBestColorTableSize(uint8 numColors)
    internal
    pure
    returns (uint256)
  {
    if (numColors > 64) {
      return 128;
    }
    if (numColors > 32) {
      return 64;
    }
    if (numColors > 16) {
      return 32;
    }
    if (numColors > 8) {
      return 16;
    }
    if (numColors > 4) {
      return 8;
    }
    if (numColors > 2) {
      return 4;
    }
    return 2;
  }

  function getLogicalScreenDescriptor(uint8 numColors)
    internal
    pure
    returns (bytes1)
  {
    require(numColors < 128, 'Only a maximum of 127 colors allowed');
    if (numColors > 64) {
      return hex'F6';
    }
    if (numColors > 32) {
      return hex'F5';
    }
    if (numColors > 16) {
      return hex'F4';
    }
    if (numColors > 8) {
      return hex'F3';
    }
    if (numColors > 4) {
      return hex'F2';
    }
    if (numColors > 2) {
      return hex'F1';
    }
    return hex'F0';
  }

  function getGifHeader(bytes calldata props)
    internal
    view
    returns (bytes memory)
  {
    return
      abi.encodePacked(
        GIF_89_A,
        props[WIDTH_INDEX],
        hex'00',
        props[HEIGHT_INDEX],
        hex'00',
        getLogicalScreenDescriptor(uint8(props[NUM_COLORS_INDEX]) + 1),
        hex'0000'
      );
  }

  function getColorTable(bytes calldata props)
    internal
    view
    returns (bytes memory)
  {
    uint8 numColors = uint8(props[NUM_COLORS_INDEX]);
    bytes memory paddedZeros = new bytes(
      (getBestColorTableSize(numColors + 1) - numColors) * 3
    );
    return abi.encodePacked(props[3:3 + (numColors * 3)], paddedZeros);
  }

  function getImageDescriptor(bytes calldata props)
    internal
    view
    returns (bytes memory)
  {
    return
      abi.encodePacked(
        hex'2C00000000',
        props[WIDTH_INDEX],
        hex'00',
        props[HEIGHT_INDEX],
        hex'000007'
      );
  }

  function getImageData(bytes memory imageDescriptor, bytes calldata props)
    public
    view
    returns (bytes memory)
  {
    bytes memory imageData = '';
    for (uint256 i = 0; i < props.length; i += IMAGE_DATA_CHUNK_SIZE) {
      uint256 end = i + IMAGE_DATA_CHUNK_SIZE;
      bool isLastChunk = end > props.length;
      bytes memory chunk = props[i:(isLastChunk ? props.length : end)];
      imageData = abi.encodePacked(
        imageData,
        uint8(chunk.length + (isLastChunk ? 2 : 1)),
        hex'80',
        chunk
      );
    }
    return
      abi.encodePacked(
        GRAPHIC_CONTROL_EXTENSION,
        imageDescriptor,
        imageData,
        hex'8100'
      );
  }

  function renderRaw(bytes calldata props)
    public
    view
    override
    returns (bytes memory)
  {
    uint256 frameImageDataSize = uint256(uint8(props[WIDTH_INDEX])) *
      uint256(uint8(props[HEIGHT_INDEX]));
    bytes memory imageDescriptor = getImageDescriptor(props);
    bytes memory imageData = '';
    uint256 currentFameImageDataSize = 0;
    for (
      uint256 i = (3 + uint8(props[NUM_COLORS_INDEX]) * 3);
      i < props.length;
      i += frameImageDataSize
    ) {
      uint256 end = i + frameImageDataSize;
      bool isLastChunk = end > props.length;
      bytes memory chunk = props[i:(isLastChunk ? props.length : end)];
      currentFameImageDataSize += chunk.length;
      imageData = abi.encodePacked(
        imageData,
        getImageData(imageDescriptor, props[i:end])
      );
    }
    return
      abi.encodePacked(
        getGifHeader(props),
        getColorTable(props),
        APPLICATION_EXTENSION,
        imageData,
        hex'3B'
      );
  }

  function render(bytes calldata props)
    external
    view
    override
    returns (string memory)
  {
    return
      string(
        abi.encodePacked(
          'data:image/gif;base64,',
          Base64.encode(renderRaw(props))
        )
      );
  }
}

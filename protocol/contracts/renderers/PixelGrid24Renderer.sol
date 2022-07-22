// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import "../interfaces/IRenderer.sol";
import "../libraries/SvgUtils.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import '@openzeppelin/contracts/utils/introspection/ERC165.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract PixelGrid24Renderer is IRenderer, Ownable, ERC165 {
  using Strings for uint256;

  string rectPrefix = '<rect width="1.05" height="1.05" ';
  string rectSuffix = '" />';

  string[576] rects = [
    'y="0" x="0"',
    'y="0" x="1"',
    'y="0" x="2"',
    'y="0" x="3"',
    'y="0" x="4"',
    'y="0" x="5"',
    'y="0" x="6"',
    'y="0" x="7"',
    'y="0" x="8"',
    'y="0" x="9"',
    'y="0" x="10"',
    'y="0" x="11"',
    'y="0" x="12"',
    'y="0" x="13"',
    'y="0" x="14"',
    'y="0" x="15"',
    'y="0" x="16"',
    'y="0" x="17"',
    'y="0" x="18"',
    'y="0" x="19"',
    'y="0" x="20"',
    'y="0" x="21"',
    'y="0" x="22"',
    'y="0" x="23"',
    'y="1" x="0"',
    'y="1" x="1"',
    'y="1" x="2"',
    'y="1" x="3"',
    'y="1" x="4"',
    'y="1" x="5"',
    'y="1" x="6"',
    'y="1" x="7"',
    'y="1" x="8"',
    'y="1" x="9"',
    'y="1" x="10"',
    'y="1" x="11"',
    'y="1" x="12"',
    'y="1" x="13"',
    'y="1" x="14"',
    'y="1" x="15"',
    'y="1" x="16"',
    'y="1" x="17"',
    'y="1" x="18"',
    'y="1" x="19"',
    'y="1" x="20"',
    'y="1" x="21"',
    'y="1" x="22"',
    'y="1" x="23"',
    'y="2" x="0"',
    'y="2" x="1"',
    'y="2" x="2"',
    'y="2" x="3"',
    'y="2" x="4"',
    'y="2" x="5"',
    'y="2" x="6"',
    'y="2" x="7"',
    'y="2" x="8"',
    'y="2" x="9"',
    'y="2" x="10"',
    'y="2" x="11"',
    'y="2" x="12"',
    'y="2" x="13"',
    'y="2" x="14"',
    'y="2" x="15"',
    'y="2" x="16"',
    'y="2" x="17"',
    'y="2" x="18"',
    'y="2" x="19"',
    'y="2" x="20"',
    'y="2" x="21"',
    'y="2" x="22"',
    'y="2" x="23"',
    'y="3" x="0"',
    'y="3" x="1"',
    'y="3" x="2"',
    'y="3" x="3"',
    'y="3" x="4"',
    'y="3" x="5"',
    'y="3" x="6"',
    'y="3" x="7"',
    'y="3" x="8"',
    'y="3" x="9"',
    'y="3" x="10"',
    'y="3" x="11"',
    'y="3" x="12"',
    'y="3" x="13"',
    'y="3" x="14"',
    'y="3" x="15"',
    'y="3" x="16"',
    'y="3" x="17"',
    'y="3" x="18"',
    'y="3" x="19"',
    'y="3" x="20"',
    'y="3" x="21"',
    'y="3" x="22"',
    'y="3" x="23"',
    'y="4" x="0"',
    'y="4" x="1"',
    'y="4" x="2"',
    'y="4" x="3"',
    'y="4" x="4"',
    'y="4" x="5"',
    'y="4" x="6"',
    'y="4" x="7"',
    'y="4" x="8"',
    'y="4" x="9"',
    'y="4" x="10"',
    'y="4" x="11"',
    'y="4" x="12"',
    'y="4" x="13"',
    'y="4" x="14"',
    'y="4" x="15"',
    'y="4" x="16"',
    'y="4" x="17"',
    'y="4" x="18"',
    'y="4" x="19"',
    'y="4" x="20"',
    'y="4" x="21"',
    'y="4" x="22"',
    'y="4" x="23"',
    'y="5" x="0"',
    'y="5" x="1"',
    'y="5" x="2"',
    'y="5" x="3"',
    'y="5" x="4"',
    'y="5" x="5"',
    'y="5" x="6"',
    'y="5" x="7"',
    'y="5" x="8"',
    'y="5" x="9"',
    'y="5" x="10"',
    'y="5" x="11"',
    'y="5" x="12"',
    'y="5" x="13"',
    'y="5" x="14"',
    'y="5" x="15"',
    'y="5" x="16"',
    'y="5" x="17"',
    'y="5" x="18"',
    'y="5" x="19"',
    'y="5" x="20"',
    'y="5" x="21"',
    'y="5" x="22"',
    'y="5" x="23"',
    'y="6" x="0"',
    'y="6" x="1"',
    'y="6" x="2"',
    'y="6" x="3"',
    'y="6" x="4"',
    'y="6" x="5"',
    'y="6" x="6"',
    'y="6" x="7"',
    'y="6" x="8"',
    'y="6" x="9"',
    'y="6" x="10"',
    'y="6" x="11"',
    'y="6" x="12"',
    'y="6" x="13"',
    'y="6" x="14"',
    'y="6" x="15"',
    'y="6" x="16"',
    'y="6" x="17"',
    'y="6" x="18"',
    'y="6" x="19"',
    'y="6" x="20"',
    'y="6" x="21"',
    'y="6" x="22"',
    'y="6" x="23"',
    'y="7" x="0"',
    'y="7" x="1"',
    'y="7" x="2"',
    'y="7" x="3"',
    'y="7" x="4"',
    'y="7" x="5"',
    'y="7" x="6"',
    'y="7" x="7"',
    'y="7" x="8"',
    'y="7" x="9"',
    'y="7" x="10"',
    'y="7" x="11"',
    'y="7" x="12"',
    'y="7" x="13"',
    'y="7" x="14"',
    'y="7" x="15"',
    'y="7" x="16"',
    'y="7" x="17"',
    'y="7" x="18"',
    'y="7" x="19"',
    'y="7" x="20"',
    'y="7" x="21"',
    'y="7" x="22"',
    'y="7" x="23"',
    'y="8" x="0"',
    'y="8" x="1"',
    'y="8" x="2"',
    'y="8" x="3"',
    'y="8" x="4"',
    'y="8" x="5"',
    'y="8" x="6"',
    'y="8" x="7"',
    'y="8" x="8"',
    'y="8" x="9"',
    'y="8" x="10"',
    'y="8" x="11"',
    'y="8" x="12"',
    'y="8" x="13"',
    'y="8" x="14"',
    'y="8" x="15"',
    'y="8" x="16"',
    'y="8" x="17"',
    'y="8" x="18"',
    'y="8" x="19"',
    'y="8" x="20"',
    'y="8" x="21"',
    'y="8" x="22"',
    'y="8" x="23"',
    'y="9" x="0"',
    'y="9" x="1"',
    'y="9" x="2"',
    'y="9" x="3"',
    'y="9" x="4"',
    'y="9" x="5"',
    'y="9" x="6"',
    'y="9" x="7"',
    'y="9" x="8"',
    'y="9" x="9"',
    'y="9" x="10"',
    'y="9" x="11"',
    'y="9" x="12"',
    'y="9" x="13"',
    'y="9" x="14"',
    'y="9" x="15"',
    'y="9" x="16"',
    'y="9" x="17"',
    'y="9" x="18"',
    'y="9" x="19"',
    'y="9" x="20"',
    'y="9" x="21"',
    'y="9" x="22"',
    'y="9" x="23"',
    'y="10" x="0"',
    'y="10" x="1"',
    'y="10" x="2"',
    'y="10" x="3"',
    'y="10" x="4"',
    'y="10" x="5"',
    'y="10" x="6"',
    'y="10" x="7"',
    'y="10" x="8"',
    'y="10" x="9"',
    'y="10" x="10"',
    'y="10" x="11"',
    'y="10" x="12"',
    'y="10" x="13"',
    'y="10" x="14"',
    'y="10" x="15"',
    'y="10" x="16"',
    'y="10" x="17"',
    'y="10" x="18"',
    'y="10" x="19"',
    'y="10" x="20"',
    'y="10" x="21"',
    'y="10" x="22"',
    'y="10" x="23"',
    'y="11" x="0"',
    'y="11" x="1"',
    'y="11" x="2"',
    'y="11" x="3"',
    'y="11" x="4"',
    'y="11" x="5"',
    'y="11" x="6"',
    'y="11" x="7"',
    'y="11" x="8"',
    'y="11" x="9"',
    'y="11" x="10"',
    'y="11" x="11"',
    'y="11" x="12"',
    'y="11" x="13"',
    'y="11" x="14"',
    'y="11" x="15"',
    'y="11" x="16"',
    'y="11" x="17"',
    'y="11" x="18"',
    'y="11" x="19"',
    'y="11" x="20"',
    'y="11" x="21"',
    'y="11" x="22"',
    'y="11" x="23"',
    'y="12" x="0"',
    'y="12" x="1"',
    'y="12" x="2"',
    'y="12" x="3"',
    'y="12" x="4"',
    'y="12" x="5"',
    'y="12" x="6"',
    'y="12" x="7"',
    'y="12" x="8"',
    'y="12" x="9"',
    'y="12" x="10"',
    'y="12" x="11"',
    'y="12" x="12"',
    'y="12" x="13"',
    'y="12" x="14"',
    'y="12" x="15"',
    'y="12" x="16"',
    'y="12" x="17"',
    'y="12" x="18"',
    'y="12" x="19"',
    'y="12" x="20"',
    'y="12" x="21"',
    'y="12" x="22"',
    'y="12" x="23"',
    'y="13" x="0"',
    'y="13" x="1"',
    'y="13" x="2"',
    'y="13" x="3"',
    'y="13" x="4"',
    'y="13" x="5"',
    'y="13" x="6"',
    'y="13" x="7"',
    'y="13" x="8"',
    'y="13" x="9"',
    'y="13" x="10"',
    'y="13" x="11"',
    'y="13" x="12"',
    'y="13" x="13"',
    'y="13" x="14"',
    'y="13" x="15"',
    'y="13" x="16"',
    'y="13" x="17"',
    'y="13" x="18"',
    'y="13" x="19"',
    'y="13" x="20"',
    'y="13" x="21"',
    'y="13" x="22"',
    'y="13" x="23"',
    'y="14" x="0"',
    'y="14" x="1"',
    'y="14" x="2"',
    'y="14" x="3"',
    'y="14" x="4"',
    'y="14" x="5"',
    'y="14" x="6"',
    'y="14" x="7"',
    'y="14" x="8"',
    'y="14" x="9"',
    'y="14" x="10"',
    'y="14" x="11"',
    'y="14" x="12"',
    'y="14" x="13"',
    'y="14" x="14"',
    'y="14" x="15"',
    'y="14" x="16"',
    'y="14" x="17"',
    'y="14" x="18"',
    'y="14" x="19"',
    'y="14" x="20"',
    'y="14" x="21"',
    'y="14" x="22"',
    'y="14" x="23"',
    'y="15" x="0"',
    'y="15" x="1"',
    'y="15" x="2"',
    'y="15" x="3"',
    'y="15" x="4"',
    'y="15" x="5"',
    'y="15" x="6"',
    'y="15" x="7"',
    'y="15" x="8"',
    'y="15" x="9"',
    'y="15" x="10"',
    'y="15" x="11"',
    'y="15" x="12"',
    'y="15" x="13"',
    'y="15" x="14"',
    'y="15" x="15"',
    'y="15" x="16"',
    'y="15" x="17"',
    'y="15" x="18"',
    'y="15" x="19"',
    'y="15" x="20"',
    'y="15" x="21"',
    'y="15" x="22"',
    'y="15" x="23"',
    'y="16" x="0"',
    'y="16" x="1"',
    'y="16" x="2"',
    'y="16" x="3"',
    'y="16" x="4"',
    'y="16" x="5"',
    'y="16" x="6"',
    'y="16" x="7"',
    'y="16" x="8"',
    'y="16" x="9"',
    'y="16" x="10"',
    'y="16" x="11"',
    'y="16" x="12"',
    'y="16" x="13"',
    'y="16" x="14"',
    'y="16" x="15"',
    'y="16" x="16"',
    'y="16" x="17"',
    'y="16" x="18"',
    'y="16" x="19"',
    'y="16" x="20"',
    'y="16" x="21"',
    'y="16" x="22"',
    'y="16" x="23"',
    'y="17" x="0"',
    'y="17" x="1"',
    'y="17" x="2"',
    'y="17" x="3"',
    'y="17" x="4"',
    'y="17" x="5"',
    'y="17" x="6"',
    'y="17" x="7"',
    'y="17" x="8"',
    'y="17" x="9"',
    'y="17" x="10"',
    'y="17" x="11"',
    'y="17" x="12"',
    'y="17" x="13"',
    'y="17" x="14"',
    'y="17" x="15"',
    'y="17" x="16"',
    'y="17" x="17"',
    'y="17" x="18"',
    'y="17" x="19"',
    'y="17" x="20"',
    'y="17" x="21"',
    'y="17" x="22"',
    'y="17" x="23"',
    'y="18" x="0"',
    'y="18" x="1"',
    'y="18" x="2"',
    'y="18" x="3"',
    'y="18" x="4"',
    'y="18" x="5"',
    'y="18" x="6"',
    'y="18" x="7"',
    'y="18" x="8"',
    'y="18" x="9"',
    'y="18" x="10"',
    'y="18" x="11"',
    'y="18" x="12"',
    'y="18" x="13"',
    'y="18" x="14"',
    'y="18" x="15"',
    'y="18" x="16"',
    'y="18" x="17"',
    'y="18" x="18"',
    'y="18" x="19"',
    'y="18" x="20"',
    'y="18" x="21"',
    'y="18" x="22"',
    'y="18" x="23"',
    'y="19" x="0"',
    'y="19" x="1"',
    'y="19" x="2"',
    'y="19" x="3"',
    'y="19" x="4"',
    'y="19" x="5"',
    'y="19" x="6"',
    'y="19" x="7"',
    'y="19" x="8"',
    'y="19" x="9"',
    'y="19" x="10"',
    'y="19" x="11"',
    'y="19" x="12"',
    'y="19" x="13"',
    'y="19" x="14"',
    'y="19" x="15"',
    'y="19" x="16"',
    'y="19" x="17"',
    'y="19" x="18"',
    'y="19" x="19"',
    'y="19" x="20"',
    'y="19" x="21"',
    'y="19" x="22"',
    'y="19" x="23"',
    'y="20" x="0"',
    'y="20" x="1"',
    'y="20" x="2"',
    'y="20" x="3"',
    'y="20" x="4"',
    'y="20" x="5"',
    'y="20" x="6"',
    'y="20" x="7"',
    'y="20" x="8"',
    'y="20" x="9"',
    'y="20" x="10"',
    'y="20" x="11"',
    'y="20" x="12"',
    'y="20" x="13"',
    'y="20" x="14"',
    'y="20" x="15"',
    'y="20" x="16"',
    'y="20" x="17"',
    'y="20" x="18"',
    'y="20" x="19"',
    'y="20" x="20"',
    'y="20" x="21"',
    'y="20" x="22"',
    'y="20" x="23"',
    'y="21" x="0"',
    'y="21" x="1"',
    'y="21" x="2"',
    'y="21" x="3"',
    'y="21" x="4"',
    'y="21" x="5"',
    'y="21" x="6"',
    'y="21" x="7"',
    'y="21" x="8"',
    'y="21" x="9"',
    'y="21" x="10"',
    'y="21" x="11"',
    'y="21" x="12"',
    'y="21" x="13"',
    'y="21" x="14"',
    'y="21" x="15"',
    'y="21" x="16"',
    'y="21" x="17"',
    'y="21" x="18"',
    'y="21" x="19"',
    'y="21" x="20"',
    'y="21" x="21"',
    'y="21" x="22"',
    'y="21" x="23"',
    'y="22" x="0"',
    'y="22" x="1"',
    'y="22" x="2"',
    'y="22" x="3"',
    'y="22" x="4"',
    'y="22" x="5"',
    'y="22" x="6"',
    'y="22" x="7"',
    'y="22" x="8"',
    'y="22" x="9"',
    'y="22" x="10"',
    'y="22" x="11"',
    'y="22" x="12"',
    'y="22" x="13"',
    'y="22" x="14"',
    'y="22" x="15"',
    'y="22" x="16"',
    'y="22" x="17"',
    'y="22" x="18"',
    'y="22" x="19"',
    'y="22" x="20"',
    'y="22" x="21"',
    'y="22" x="22"',
    'y="22" x="23"',
    'y="23" x="0"',
    'y="23" x="1"',
    'y="23" x="2"',
    'y="23" x="3"',
    'y="23" x="4"',
    'y="23" x="5"',
    'y="23" x="6"',
    'y="23" x="7"',
    'y="23" x="8"',
    'y="23" x="9"',
    'y="23" x="10"',
    'y="23" x="11"',
    'y="23" x="12"',
    'y="23" x="13"',
    'y="23" x="14"',
    'y="23" x="15"',
    'y="23" x="16"',
    'y="23" x="17"',
    'y="23" x="18"',
    'y="23" x="19"',
    'y="23" x="20"',
    'y="23" x="21"',
    'y="23" x="22"',
    'y="23" x="23"'
  ];

  function name() public override pure returns (string memory) {
    return 'Pixel Grid 24';
  }

  function owner() public override(Ownable, IRenderer) view returns (address) {
    return super.owner();
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
    return
      interfaceId == type(IRenderer).interfaceId ||
      super.supportsInterface(interfaceId);
  }

  function propsSize() external override pure returns (uint256) {
    return 576 * 3;
  }
  
  function additionalMetadataURI() external override pure returns (string memory) {
    return "ipfs://bafkreigpijgje7qe432abjkp45bfvuwxlsx3mw6r7cz4x6davfbxjk7k5a";
  }

  function renderAttributeKey() external override pure returns (string memory) {
    return "image";
  }

  function renderRaw(bytes calldata props) public override view returns (bytes memory) {
    string memory content = '';
    for (uint i = 0; i < 576; ++i) {
      content = string(abi.encodePacked(content, rectPrefix, rects[i], ' fill="', SvgUtils.toColorHexStringByBytes(props[i * 3], props[i * 3 + 1], props[i * 3 + 2]), rectSuffix));
    }

    return abi.encodePacked(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="background:#F1F1F1">',
        content,
      '</svg>'
      )
    ;
  }

  function render(bytes calldata props) external override view returns (string memory) {
    return string(
      abi.encodePacked(
        'data:image/svg+xml;base64,',
        Base64.encode(renderRaw(props)) 
      )
    );
  }

  function attributes(bytes calldata props) external override pure returns (string memory) {
    uint i = 0;
    while(props[i] != 0x00) {
      i++;
    }
      return string(
            abi.encodePacked(
              '{"trait_type": "Data Length", "value":', i.toString(), '}'
            )
          );
  }
}
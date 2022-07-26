require('dotenv').config();

import { readFile, writeFile } from 'fs';
import { Blob, NFTStorage } from 'nft.storage';
import { promisify } from 'util';

const writeFileAsync = promisify(writeFile);
const readFileAsync = promisify(readFile);

const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_API_KEY ?? '' });

(async () => {
  console.log('Uploading JSON');
  console.log();

  const obj = {
    description:
      'A 24 by 24 HSL pixel renderer. Provide 576 tuples of 3 bytes (H, S, L) in a continuous hex string. 0x00 maps to 0 deg, 0xFF to 355 deg for hue. 0x00 maps to 0%, 0xFF maps to 100% for saturation and lightness.',
    sampleOptions: {
      input:
        '0x00FF8001FF8002FF8003FF8004FF8005FF8006FF8007FF8008FF8009FF800aFF800bFF800cFF800dFF800eFF800fFF8010FF8011FF8012FF8013FF8014FF8015FF8016FF8017FF8018FF8019FF801aFF801bFF801cFF801dFF801eFF801fFF8020FF8021FF8022FF8023FF8024FF8025FF8026FF8027FF8028FF8029FF802aFF802bFF802cFF802dFF802eFF802fFF8030FF8031FF8032FF8033FF8034FF8035FF8036FF8037FF8038FF8039FF803aFF803bFF803cFF803dFF803eFF803fFF8040FF8041FF8042FF8043FF8044FF8045FF8046FF8047FF8048FF8049FF804aFF804bFF804cFF804dFF804eFF804fFF8050FF8051FF8052FF8053FF8054FF8055FF8056FF8057FF8058FF8059FF805aFF805bFF805cFF805dFF805eFF805fFF8060FF8061FF8062FF8063FF8064FF8065FF8066FF8067FF8068FF8069FF806aFF806bFF806cFF806dFF806eFF806fFF8070FF8071FF8072FF8073FF8074FF8075FF8076FF8077FF8078FF8079FF807aFF807bFF807cFF807dFF807eFF807fFF8080FF8081FF8082FF8083FF8084FF8085FF8086FF8087FF8088FF8089FF808aFF808bFF808cFF808dFF808eFF808fFF8090FF8091FF8092FF8093FF8094FF8095FF8096FF8097FF8098FF8099FF809aFF809bFF809cFF809dFF809eFF809fFF80a0FF80a1FF80a2FF80a3FF80a4FF80a5FF80a6FF80a7FF80a8FF80a9FF80aaFF80abFF80acFF80adFF80aeFF80afFF80b0FF80b1FF80b2FF80b3FF80b4FF80b5FF80b6FF80b7FF80b8FF80b9FF80baFF80bbFF80bcFF80bdFF80beFF80bfFF80c0FF80c1FF80c2FF80c3FF80c4FF80c5FF80c6FF80c7FF80c8FF80c9FF80caFF80cbFF80ccFF80cdFF80ceFF80cfFF80d0FF80d1FF80d2FF80d3FF80d4FF80d5FF80d6FF80d7FF80d8FF80d9FF80daFF80dbFF80dcFF80ddFF80deFF80dfFF80e0FF80e1FF80e2FF80e3FF80e4FF80e5FF80e6FF80e7FF80e8FF80e9FF80eaFF80ebFF80ecFF80edFF80eeFF80efFF80f0FF80f1FF80f2FF80f3FF80f4FF80f5FF80f6FF80f7FF80f8FF80f9FF80faFF80fbFF80fcFF80fdFF80feFF80ffFF8000FF8001FF8002FF8003FF8004FF8005FF8006FF8007FF8008FF8009FF800aFF800bFF800cFF800dFF800eFF800fFF8010FF8011FF8012FF8013FF8014FF8015FF8016FF8017FF8018FF8019FF801aFF801bFF801cFF801dFF801eFF801fFF8020FF8021FF8022FF8023FF8024FF8025FF8026FF8027FF8028FF8029FF802aFF802bFF802cFF802dFF802eFF802fFF8030FF8031FF8032FF8033FF8034FF8035FF8036FF8037FF8038FF8039FF803aFF803bFF803cFF803dFF803eFF803fFF8040FF8041FF8042FF8043FF8044FF8045FF8046FF8047FF8048FF8049FF804aFF804bFF804cFF804dFF804eFF804fFF8050FF8051FF8052FF8053FF8054FF8055FF8056FF8057FF8058FF8059FF805aFF805bFF805cFF805dFF805eFF805fFF8060FF8061FF8062FF8063FF8064FF8065FF8066FF8067FF8068FF8069FF806aFF806bFF806cFF806dFF806eFF806fFF8070FF8071FF8072FF8073FF8074FF8075FF8076FF8077FF8078FF8079FF807aFF807bFF807cFF807dFF807eFF807fFF8080FF8081FF8082FF8083FF8084FF8085FF8086FF8087FF8088FF8089FF808aFF808bFF808cFF808dFF808eFF808fFF8090FF8091FF8092FF8093FF8094FF8095FF8096FF8097FF8098FF8099FF809aFF809bFF809cFF809dFF809eFF809fFF80a0FF80a1FF80a2FF80a3FF80a4FF80a5FF80a6FF80a7FF80a8FF80a9FF80aaFF80abFF80acFF80adFF80aeFF80afFF80b0FF80b1FF80b2FF80b3FF80b4FF80b5FF80b6FF80b7FF80b8FF80b9FF80baFF80bbFF80bcFF80bdFF80beFF80bfFF80c0FF80c1FF80c2FF80c3FF80c4FF80c5FF80c6FF80c7FF80c8FF80c9FF80caFF80cbFF80ccFF80cdFF80ceFF80cfFF80d0FF80d1FF80d2FF80d3FF80d4FF80d5FF80d6FF80d7FF80d8FF80d9FF80daFF80dbFF80dcFF80ddFF80deFF80dfFF80e0FF80e1FF80e2FF80e3FF80e4FF80e5FF80e6FF80e7FF80e8FF80e9FF80eaFF80ebFF80ecFF80edFF80eeFF80efFF80f0FF80f1FF80f2FF80f3FF80f4FF80f5FF80f6FF80f7FF80f8FF80f9FF80faFF80fbFF80fcFF80fdFF80feFF80ffFF8000FF8001FF8002FF8003FF8004FF8005FF8006FF8007FF8008FF8009FF800aFF800bFF800cFF800dFF800eFF800fFF8010FF8011FF8012FF8013FF8014FF8015FF8016FF8017FF8018FF8019FF801aFF801bFF801cFF801dFF801eFF801fFF8020FF8021FF8022FF8023FF8024FF8025FF8026FF8027FF8028FF8029FF802aFF802bFF802cFF802dFF802eFF802fFF8030FF8031FF8032FF8033FF8034FF8035FF8036FF8037FF8038FF8039FF803aFF803bFF803cFF803dFF803eFF803fFF80',
    },
    previewOptions: {
      byteGroups: [
        {
          numGroups: '576',
          groupBytesIn: 3,
          label: 'Pixel',
        },
        {
          numGroups: 'infinity',
          groupBytesIn: 1,
          label: 'Overflow',
        },
      ],
    },
  };

  const metadataBlob = new Blob([JSON.stringify(obj)]);
  const rootCid = await client.storeBlob(metadataBlob);
  console.log(rootCid, JSON.stringify(obj));
})();

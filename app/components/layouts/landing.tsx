import Link from 'next/link';
import React from 'react';
import { ROUTES } from '../../constants/routes';
import { DetailRowsContainer } from '../details/rows';
import {
  OneColumnContainer,
  OneColumnContentContainer,
} from '../divs/oneColumn';
import { PrimaryButton, TertiaryButton } from '../inputs/button';
import { A, B, H1, P } from '../texts';

export const Landing: React.FC = () => {
  return (
    <OneColumnContainer>
      <OneColumnContentContainer>
        <DetailRowsContainer>
          <div>
            <H1 style={{ fontSize: 24 }}>NFT GEN-ART IS TOO F**KING EASY.</H1>
          </div>
          <P>
            Enter <strong>ABF</strong>.
          </P>
          <P>
            ABF is a <B>protocol</B> to deploy, mint, and create on-chain
            generative art NFTs. No fees + fully self-controlled NFT contracts
            designed to last forever.
          </P>
          <P>
            The catch? You need to write your generative art with{' '}
            <A>Brainfuck</A>.
          </P>
          <P>
            <strong>Ready to get your brain f**ked?</strong>
          </P>
          <br />
          <br />
          <Link passHref href={ROUTES.RECRUIT}>
            <a>
              <PrimaryButton>JOIN THE CORP</PrimaryButton>
            </a>
          </Link>
          <br />
          <br />
          <Link passHref href={ROUTES.DOCS.INDEX}>
            <a>
              <TertiaryButton>READ THE DOCS</TertiaryButton>
            </a>
          </Link>
          <P style={{ opacity: 0.2 }}>
            {
              '-[------->+<]>--.[->+++++<]>++.+++++++++.[----->++<]>+.+++[->++<]>+.--[--->+<]>---.++.[---->+<]>+++.-[--->++<]>-.++++++++++.+[---->+<]>+++.+[->+++<]>+.+.----.+++.[->+++<]>++.++[--->++<]>.++++++[->++<]>.+[--->+<]>.-.-------.-[--->+<]>--.++[--->++<]>.---.[->++++++<]>.+[->+++<]>.--[--->+<]>-.++[->+++<]>+.--.+++++++++.[----->++<]>+.+++[->++<]>+.--[--->+<]>---.++.[++>---<]>.'
            }
          </P>
        </DetailRowsContainer>
      </OneColumnContentContainer>
    </OneColumnContainer>
  );
};

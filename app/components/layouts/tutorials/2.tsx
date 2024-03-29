import { deployments } from '@abf-monorepo/protocol';
import React, { FC, useMemo } from 'react';
import {
  RewardModal,
  TutorialFooter,
  TUTORIALS_MAP,
  TwoColumnTutorialContainer,
} from '.';
import { CHAIN_ID } from '../../../constants';
import { ROUTES } from '../../../constants/routes';
import {
  TutorialMetadata,
  TutorialsProvider,
  useTutorialContext,
} from '../../../contexts/tutorial';
import { DetailRowsContainer } from '../../details/rows';
import {
  TwoColumnContainer,
  TwoColumnContentContainer,
} from '../../divs/twoColumn';
import { PrimaryButton } from '../../inputs/button';
import { B, Label, P } from '../../texts';
import { BasicEditor } from './editor';
import { BasicRender } from './render';

const TUTORIAL_REWARD = `https://pin.abf.dev/ipfs/QmUip6HjtbTkE9NzKZoX5kRuH1scpjvmWDxyr1QSCQsuJX`;

const TUTORIAL_METADATA = (refresh?: any): Partial<TutorialMetadata> => {
  const expectedOutputHexStr = `0x000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfeff`;
  return useMemo(
    () => ({
      code: '',
      expectedOutputHexStr,
    }),
    [expectedOutputHexStr],
  );
};

export const Tutorial2: React.FC = () => {
  return (
    <>
      <RewardModal reward={TUTORIAL_REWARD} />
      <TutorialsProvider
        renderer={deployments[CHAIN_ID].renderers.monoPixelGrid16}
        getDefaultTutorialMetadata={TUTORIAL_METADATA}
        reward={TUTORIAL_REWARD}
      >
        <TwoColumnContainer>
          <div>
            <TwoColumnTutorialContainer>
              <Jumbotron />

              <Editor />
              <TutorialFooter />
            </TwoColumnTutorialContainer>
          </div>
          <div>
            <TwoColumnContentContainer
              style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
            >
              <BasicRender />
            </TwoColumnContentContainer>
          </div>
        </TwoColumnContainer>
      </TutorialsProvider>
    </>
  );
};

const Jumbotron: FC = () => {
  return (
    <DetailRowsContainer>
      <P>
        <B>ASSIGNMENT: {TUTORIALS_MAP[ROUTES.TRAIN[2]]}</B>
      </P>
      <P>
        <B>SUBJECT: ABFC NEW PERSONNEL TRAINING - MATERIAL 002</B>
      </P>
      <P>
        I bet you had a good time with the last assignment huh? I bet that
        really f**king tickled you. Time to step your shit up.
      </P>
      <P>
        The purpose of this exercise is to understand how to LOOP. Figure out
        how to count upwards. It's a real pain in the ass.
      </P>

      <Label>CHALLENGE</Label>
      <P>
        <B>
          Create a perfect gradient every pixel where: NEXT_VALUE = PREV_VALUE +
          1. Start at BLACK [0x00] and end at WHITE [0xFF].
        </B>
      </P>
    </DetailRowsContainer>
  );
};

const Editor: FC = () => {
  const { onSubmit, isButtonDisabled } = useTutorialContext();
  return (
    <>
      <BasicEditor />
      <PrimaryButton onClick={onSubmit} disabled={isButtonDisabled}>
        SUBMIT ANSWER
      </PrimaryButton>
    </>
  );
};

import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import {
  CONDITIONAL_DOCS,
  CONTROL_DOCS,
  DEBUG_DOCS,
  LOOP_DOCS,
  MATH_DOCS,
  MEMORY_DOCS,
  STORAGE_DOCS,
} from '../../data/mixinDocs';
import { MixinDoc, MixinDocExample } from '../../types/docs';
import { runBrainFuckCodeDebug } from '../../utils/brainFuck';
import { transpileTemplatedBf } from '../../utils/brainFuck/template';
import {
  createTemplateInsert,
  TEMPLATE_INSERT_OPCODE_END,
  TEMPLATE_INSERT_OPCODE_START,
  TEMPLATE_INSERT_SEPARATOR,
} from '../../utils/brainFuck/template/constants';
import { STORAGE_NUM_REGISTERS } from '../../utils/brainFuck/template/libraries/storage';
import { LineBreak } from '../break';
import { GroupedBytes } from '../bytes/groupedBytes';
import { DetailRowsContainer } from '../details/rows';
import {
  OneColumnContainer,
  OneColumnContentContainer,
} from '../divs/oneColumn';
import { B, BlockCode, Code, H1, H2, H3, I, Label, OL, P } from '../texts';
import {
  LinkGroup,
  TableOfContentsAnchor,
  TableOfContentsContainer,
} from '../texts/toc';
import { DocumentationFooter } from './docs';

export const BrainFuckMixins: React.FC = () => {
  return (
    <OneColumnContainer>
      <OneColumnContentContainer>
        <DetailRowsContainer>
          <H1 style={{ fontSize: 24 }}>BF! MIXINS, POWER OVERWHELMING</H1>
          <P>
            <B>TLDR</B> Brainfuck! Mixins are a powerful collection of modular
            BF! code that is used via the <Code>{'{{mixinLabel}}'}</Code>{' '}
            format.
          </P>
          <P>
            A common pain point (in some ways intentional) has been doing
            "basic" stuff that you take for granted in higher level languages
            like <I>C++</I>.
          </P>
          <P>
            The intent of the ABF Corp is <B>NOT</B> to dilute the purity of the
            BF! language by adding more opcodes. Instead, we take a
            transpilation/mixin approach.
          </P>
          <H2>Using Mixins</H2>
          <P>Mixins are formatted in ABF like the following:</P>
          <BlockCode>
            <P>{'{{mixinLabel:param1:...:paramX}}'}</P>
          </BlockCode>
          <P>
            <Code>{TEMPLATE_INSERT_OPCODE_START}</Code> and{' '}
            <Code>{TEMPLATE_INSERT_OPCODE_END}</Code> denote the start and end
            of a mixin. The first string in the mixin is used to identify the
            mixin used. <Code>{TEMPLATE_INSERT_SEPARATOR}</Code> is used to
            provide optional parameters to the mixin.
          </P>
          <P>
            <B>Example:</B>
          </P>
          <BlockCode>
            <P>{`{{3}}`}</P>
            <P>{`{{eq:3}}`}</P>
          </BlockCode>
          <P>Transpiles to:</P>
          <BlockCode>
            <P>{transpileTemplatedBf('{{3}}')}</P>
            <P>{transpileTemplatedBf('{{eq:3}}')}</P>
          </BlockCode>
          <P>
            <B>Note:</B> If you do not need to provide any parameters to the
            mixin, omit <Code>{TEMPLATE_INSERT_SEPARATOR}</Code>.
          </P>
          <H2>SML, Screw My Life</H2>
          <P>
            The SML actually stands for <I>Standard Mixin Library</I> and is the
            default collection of mixins provided by the ABF Corp. As the Corp
            continues to research the nature of mixins, the SML will grow with
            new libraries.
          </P>
          <P>The SML is composed of a few core libraries:</P>
          <div
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              margin: '24px 0 24px 0',
            }}
          ></div>
          <TableOfContents />
          <div
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              margin: '24px 0 24px 0',
            }}
          ></div>
          <H2>Understanding the SML</H2>
          <P>
            To better allow corp members to use the SML, we will describe a few
            key design assumptions that the SML makes about your program design:
          </P>
          <OL>
            <li>
              assumes that the tape is "dirty". If a mixin needs to utilize a
              data cell, it assumes that data cell can be nonzero. All mixin
              code will clean up any extra data cells it uses after execution by
              setting them to zero.
            </li>
            <li>
              leaves the <I>data pointer</I> on the data cell that is the result
              of the work done by the mixin. (Ex: <Code>{`{{copy}}`}</Code>{' '}
              leaves the data pointer where the value was copied to.)
            </li>
            <li>
              unless noted, mixins do not modify values to the left of the
              current <I>data pointer</I>. (Ex: <Code>{`{{add:3}}`}</Code> puts
              the result into the cell to the right of the <I>data pointer</I>.)
            </li>
            <li>
              most mixins require extra data cells to track stateful logic.
              Usually (unless specifically noted), mixins assume that all data
              cells to the right of the <I>data pointer</I> are usable and do
              not contain meaningful data.
            </li>
          </OL>
          <P>
            In the doc you will see "<I>data pointer</I> after execution: ..."
            this refers to where you should expect the data pointer to be after
            the mixin, relative to where it was right before the mixin.
          </P>
          <LineBreak id="numbers" />
          <H2>Numbers</H2>
          <P>
            Numbers is a simple library that enables easy creation of numerical
            constants.
          </P>
          <P>This library contains 256 mixins for all values between 0-255.</P>
          <P>
            Numbers mixin replaces the current data cell with the provided
            numerical constant.
          </P>
          <P>
            <B>Example:</B>
          </P>
          <BlockCode>
            <P>{`{{3}}`}</P>
            <P>{`{{255}}`}</P>
          </BlockCode>
          <br />
          <LineBreak id="debug" />
          <H2>Debug</H2>
          <P>The debug library provides helpful logging utilities.</P>
          {Object.entries(DEBUG_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <LineBreak id="memory" />
          <H2>Memory</H2>
          <P>
            The memory library provides a number of utility functions to easily
            manipulate the data tape.
          </P>
          {Object.entries(MEMORY_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}{' '}
          <LineBreak id="math" />
          <H2>Math</H2>
          <P>
            The math library provides simple integer math functions. (WIP, more
            functions to come)
          </P>
          {Object.entries(MATH_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <LineBreak id="conditional" />
          <H2>Conditional</H2>
          <P>
            The conditional library provides boolean utilities and functions.
          </P>
          {Object.entries(CONDITIONAL_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <LineBreak id="control" />
          <H2>Control</H2>
          <P>
            The control library provides basic if/conditional statement
            functionality.
          </P>
          {Object.entries(CONTROL_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <LineBreak id="loop" />
          <H2>Loop</H2>
          <P>The loop library provides conditional based loop logic.</P>
          {Object.entries(LOOP_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <LineBreak id="storage" />
          <H2>Storage</H2>
          <P>
            The storage library provides a basic register + storage programming
            model.
          </P>
          <P>
            The first {STORAGE_NUM_REGISTERS} are used as registers; data cells
            that are used for computation with the expectation that any data
            stored in registers can be overwritten in later computation. Data
            cells after {STORAGE_NUM_REGISTERS} "registers" are only accessible
            via read or write mixins; designed for storing the results of
            computation.
          </P>
          {Object.entries(STORAGE_DOCS).map(([label, doc]) => {
            return (
              <MixinDocDefinition
                {...doc}
                label={label}
                key={`mixin-doc-${label}`}
              />
            );
          })}
          <br />
          <br />
          <DocumentationFooter />
        </DetailRowsContainer>
      </OneColumnContentContainer>
    </OneColumnContainer>
  );
};

const TableOfContents = () => {
  return (
    <TableOfContentsContainer>
      <P>
        <B>Sub libraries</B>
      </P>
      <LinkGroup>
        <PrimaryTableOfContentsAnchor href={'#numbers'}>
          Numbers: basic numerical constants
        </PrimaryTableOfContentsAnchor>
        <PrimaryTableOfContentsAnchor href={'#debug'}>
          Debug: logging
        </PrimaryTableOfContentsAnchor>
        {Object.keys(DEBUG_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#memory'}>
          Memory: basic data pointer/tape management
        </PrimaryTableOfContentsAnchor>
        {Object.keys(MEMORY_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#math'}>
          Math: basic integer math
        </PrimaryTableOfContentsAnchor>
        {Object.keys(MATH_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#conditional'}>
          Conditional: logic control flow
        </PrimaryTableOfContentsAnchor>
        {Object.keys(CONDITIONAL_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#control'}>
          Control: if statements
        </PrimaryTableOfContentsAnchor>
        {Object.keys(CONTROL_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#loop'}>
          Loop: for,while loops
        </PrimaryTableOfContentsAnchor>
        {Object.keys(LOOP_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        <PrimaryTableOfContentsAnchor href={'#storage'}>
          Storage: register + storage paradigm
        </PrimaryTableOfContentsAnchor>
        {Object.keys(STORAGE_DOCS).map((d) => {
          return (
            <SubTableOfContentsAnchor href={`#${d}`}>
              {d}
            </SubTableOfContentsAnchor>
          );
        })}
        {/* <TableOfContentsAnchor href={'#sample'}>
          Sample: Sample BF Code
        </TableOfContentsAnchor> */}
      </LinkGroup>
    </TableOfContentsContainer>
  );
};

const PrimaryTableOfContentsAnchor = styled(TableOfContentsAnchor)`
  font-weight: bold;
`;

const SubTableOfContentsAnchor = styled(TableOfContentsAnchor)`
  margin-left: 20px;
`;

const MixinDocDefinition: FC<MixinDoc & { label: string }> = ({
  alias,
  label,
  params,
  description,
  dataPointerLocationDescription,
  examples,
}) => {
  const Description = description;
  // console.log(alias);
  // console.log(examples);
  return (
    <>
      <H3 id={label}>
        <Code>
          {createTemplateInsert(
            label,
            params.map((p) => p.label),
          )}
        </Code>
      </H3>
      {!!alias && (
        <P>
          <B>alias</B>:{' '}
          {alias
            .map((a) =>
              createTemplateInsert(
                a,
                params.map((p) => p.label),
              ),
            )
            .join(', ')}
        </P>
      )}
      <Description />
      {(() => {
        if (params.length === 0) {
          return null;
        }
        return (
          <>
            <P>
              <B>Params</B>
            </P>
            <OL>
              {params.map((p) => {
                return (
                  <li key={`mixin-doc-${label}-param-${p.label}`}>
                    <B>{p.label}</B>
                    {p.isOptional ? ' (optional)' : ''}: {p.description}
                  </li>
                );
              })}
            </OL>
          </>
        );
      })()}
      <P>
        <I>data pointer</I> after execution: {dataPointerLocationDescription}
      </P>
      {examples.map(
        (ex) =>
          ex && (
            <MixinDocExampleDefinition
              {...ex}
              key={`mixin-doc-${label}-example-${ex.label}`}
            />
          ),
      )}
      <br />
    </>
  );
};

const MixinDocExampleDefinition: FC<MixinDocExample> = ({
  label,
  code,
  tapeLogLength,
}) => {
  const { output, tape, ptr } = useMemo(() => {
    const finalCode = transpileTemplatedBf(code);
    return runBrainFuckCodeDebug(finalCode, []);
  }, [code]);

  return (
    <>
      <P>
        <B>{label}</B>
      </P>
      <BlockCode>
        <P>{code}</P>
      </BlockCode>
      <Label>DATA TAPE:</Label>
      <GroupedBytes
        showFocusedGroupingIndex={false}
        showBytesLength={false}
        focusedByteGroupingIndex={0}
        output={
          '0x' +
          tape
            .slice(0, tapeLogLength)
            .map((d) => d.toString(16).padStart(2, '0'))
            .join('')
        }
        byteGroups={[
          {
            numGroups: 'infinity',
            groupBytesIn: 1,
            label: `DATA PTR AT ${ptr}`,
          },
        ]}
      />
    </>
  );
};

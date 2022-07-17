import { BigNumber, BytesLike, utils } from 'ethers';

const TAPE_SIZE = 3_000_000;
const LOOPING_STACK_SIZE = 8192;

export const INPUT_CONSTANT_BYTES_SIZE = 32;

export const getTokenSeed = (
  seed: BytesLike,
  tokenId: BigNumber,
  inputConstants: string,
) => {
  const hash = utils.solidityKeccak256(['bytes', 'uint256'], [seed, tokenId]);
  return `0x${inputConstants
    .slice(2)
    .padEnd(INPUT_CONSTANT_BYTES_SIZE * 2, '0')}${hash.slice(2)}`;
};

const MAX_IS_LOOPING_COUNTER = 10000;

export const runBrainFuckCode = (code: string, input: number[]) => {
  let out = '0x';
  const tape = [...Array(TAPE_SIZE)].map((_) => 0);

  let readIndex = 0;
  let ptr = 0;
  let isLooping = false;
  let isLoopingCounter = 0;
  let innerLoops = 0;
  let loopingStack = [...Array(LOOPING_STACK_SIZE)];
  let loopingStackIndex = 0;

  for (let i = 0; i < code.length; ++i) {
    const opcode = '0x' + code[i].charCodeAt(0).toString(16).toUpperCase();
    if (isLoopingCounter > MAX_IS_LOOPING_COUNTER) {
      console.log(tape.slice(0, 12));
      throw new Error('MAX LOOPS EXCEEDED (10,000)');
    }
    if (isLooping) {
      // [
      if (opcode === '0x5B') {
        innerLoops++;
      }
      // ]
      if (opcode === '0x5D') {
        isLoopingCounter++;
        if (innerLoops === 0) isLooping = false;
        else innerLoops--;
      }
    } else {
      // +
      if (opcode === '0x2B') {
        if (tape[ptr] == 255) {
          tape[ptr] = 0;
        } else {
          tape[ptr]++;
        }
      }
      // -
      if (opcode === '0x2D') {
        if (tape[ptr] == 0) {
          tape[ptr] = 255;
        } else {
          tape[ptr]--;
        }
      }
      // ,
      if (opcode === '0x2C') {
        tape[ptr] = readIndex < input.length ? input[readIndex] : 0;
        readIndex++;
      }
      // .
      if (opcode === '0x2E') {
        out += tape[ptr].toString(16).padStart(2, '0');
      }
      // !
      if (opcode === '0x21') {
        ptr = 0;
      }
      // >
      if (opcode === '0x3E') {
        ptr++;
      }
      // <
      if (opcode === '0x3C') {
        ptr--;
      }
      // [
      if (opcode === '0x5B') {
        if (tape[ptr] == 0x0) {
          isLooping = true;
        } else {
          loopingStack[loopingStackIndex] = i;
          loopingStackIndex++;
        }
      }
      // ]
      if (opcode === '0x5D') {
        isLoopingCounter++;
        if (tape[ptr] != 0x00) {
          i = loopingStack[loopingStackIndex - 1];
        } else {
          loopingStack[loopingStackIndex--] = 0;
        }
      }
    }
  }

  console.log(tape.slice(0, 12));
  return out;
};

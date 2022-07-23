import { createTemplateInsert } from '../constants';

const STORAGE_NUM_REGISTERS = 32; // smaller the better for computational efficiency
const STORAGE_SLOT_INDEX_SIZE = 2; // extra bytes are provided to allow for local computation on a slot without losing data slots

export const STORAGE_LIBRARY = {
  moveToStorageSlots: () => `!${'>'.repeat(STORAGE_NUM_REGISTERS)}`,
  store: (writeFromIndex: any, slotIndex: any) => {
    const safeSlotIndex = parseInt(slotIndex);
    if (isNaN(safeSlotIndex)) {
      return undefined;
    }
    const safeWriteFromIndex = parseInt(writeFromIndex);
    if (isNaN(safeWriteFromIndex)) {
      return undefined;
    }
    const dataSlotIndex =
      STORAGE_NUM_REGISTERS + slotIndex * STORAGE_SLOT_INDEX_SIZE;

    return `!${createTemplateInsert('jump', [
      safeWriteFromIndex,
    ])}${createTemplateInsert('copy', [dataSlotIndex])}!${createTemplateInsert(
      'jump',
      [safeWriteFromIndex],
    )}`;
  },
  read: (readIntoIndex: any, slotIndex: any) => {
    const safeSlotIndex = parseInt(slotIndex);
    if (isNaN(safeSlotIndex)) {
      return undefined;
    }
    const safeReadIntoIndex = parseInt(readIntoIndex);
    if (isNaN(safeReadIntoIndex)) {
      return undefined;
    }
    const dataSlotIndex =
      STORAGE_NUM_REGISTERS + slotIndex * STORAGE_SLOT_INDEX_SIZE;

    return `!${createTemplateInsert('jump', [
      dataSlotIndex,
    ])}${createTemplateInsert('copy', [safeReadIntoIndex - dataSlotIndex])}`;
  },
};

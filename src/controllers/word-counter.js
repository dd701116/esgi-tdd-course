import fileReader from '../helpers/fileReader';

export const sentenceWordCounter = string => {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected string, got ${typeof string}`);
  }

  return string.split(/[\s|\W]+/).filter(str => {
    return str !== '';
  }).length;
};

export const fileWordCounter = filePath => {
  /*
   * - Use fileReader to open file and read content
   * - Use sentenceWordCounter above
   * - Return value
   */
};

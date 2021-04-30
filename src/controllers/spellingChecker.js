import fileReader from '../helpers/fileReader';
import { sentenceWordCounter } from './word-counter';

export const dictionaries = {
  path: '../../assets/dictionaries',
  supportedLanguages: ['english']
};

export const spellingChecker = (text, language) => {
  /*
   * Open dictionary, check if its content is good
   * Get number of words
   * Loop onto each word of the text
   * Return json of potential mistakes, indexed by the position of the word, the mistake found and the solution
   */
};

export const spellingFixer = (text, language) => {
  /*
   * Use spellingChecker above to list the mistakes
   * Change the text to replace with the good words
   */
};

export const fileSpellingChecker = (filePath, language) => {
  /*
   * Use fileReader to open file and read content
   * Use spellingChecker with the content of the file
   * Return value from spellingChecker
   */
};

export const fileSpellingFixer = (filePath, language) => {
  /*
   * Use fileReader to open file and read content
   * Use spellingFixer with the content of the file
   * Return value from spellingFixer
   */
};


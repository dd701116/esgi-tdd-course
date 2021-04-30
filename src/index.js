import '@babel/polyfill/noConflict';

import program from 'commander';

import { sentenceWordCounter } from './controllers/word-counter';
import logger from './helpers/logger';

try {
  program.version('1.0.0', '--version');

  program
    .command('word-counter <string>')
    .description('Count number of words in a given string')
    .action(string => {
      logger.info(`Your string has ${sentenceWordCounter(string)} word(s)`);
    });

  program.parse(process.argv);
} catch (error) {
  logger.error(error.message);
  process.exit(-1);
}

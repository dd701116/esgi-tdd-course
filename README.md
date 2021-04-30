# TDD Course

## Pre-requisites

- Node LTS
- (Facultative) Docker
- (Facultative) Makefile


## How to use

### Node LTS

- Install dependencies: `yarn`
- Compile the app dynamically: `yarn dev`
- Get list of all commands: `./cli.js -h`
- Run specific command: `./cli.js <COMMAND>`
- Compile the app dynamically: `yarn test`


### Docker

- Install dependencies: `docker run --rm -v "$(pwd)":/app -w /app node:lts bash -c 'yarn`
- Compile the app dynamically: `docker run --rm -v "$(pwd)":/app -w /app node:lts bash -c 'yarn dev`
- Get list of all commands: `docker run --rm -v "$(pwd)":/app -w /app node:lts bash -c './cli.js -h'`
- Run specific command: `docker run --rm -v "$(pwd)":/app -w /app node:lts bash -c './cli.js <COMMAND>'`
- Run tests: `docker run --rm -v "$(pwd)":/app -w /app node:lts bash -c 'yarn test'`


## TD

- Compile the app dynamically (see above)
- Open the `src/controllers/word-counter.js` file and take a look at the wordCounter function that return the number of words in a string.
- Now open the `src/controllers/__tests__/word-counter.test.js` file and write as many tests as you can for all the scenarios you have in mind (At least 4 required)
- When it's done, run the tests (see above)
- If you did your job well, the app should break for specific scenarios. Change the wordCounter function to make all tests pass

## TP

### Due date

Tuesday, May 4th before 11:59PM


### Todo

Following sentenceWordCounterWrite example, write BDD process and unit / integrations tests for the following new functions:

- New helper that open a file and return its content => fileReader
- Provide a text file path and returns the number of words => fileWordCounter
- Provide a text and returns the mistakes => spellingChecker
- Provide a text and fixes the mistakes => spellingFixer
- Provide a text file path and returns the mistakes => spellingChecker
- Provide a text file path and fixes the mistakes => fileSpellingFixer

Those new functions are located in those 3 files:

- `src/controllers/word-counter.js`
- `src/controllers/spelling-checker.js`
- `src/helpers/fileReader.js`

As a "bonus", you can fill the functions with working code, but that's should not be your main focus. As a reference, the rate chart will be the following:

- 18 points for the BDD + Tests
- 2 points for the functions


### Additional Infos

- All functions in `src/controllers` files aim to be cli commands, unlike functions in `src/helpers` files which aim to be helpers for other functions
- If the function is located in `src/helpers/filePath.js`, then its BDD specs must be located in `src/helpers/__tests__/filePath.feature` and its unit / integration tests in `src/helpers/__tests__/filePath.test.js`. For the files structure, check `src/controllers/__tests__/word-counter.feature` and `src/controllers/__tests__/word-counter.test.js`


### Project delivery

Zip of the folder (without node_mudules folder, please) on MyGES. For that, use [git archive command](https://git-scm.com/docs/git-archive)

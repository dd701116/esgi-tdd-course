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

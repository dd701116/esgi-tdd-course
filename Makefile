dev :
	yarn dev
	
install :
	yarn install

test :
	yarn test

word-counter-docker :
	docker run --rm -v "$(shell pwd)":/app -w /app node:lts bash -c 'node ./cli.js word-counter "This is a docker test"'
 
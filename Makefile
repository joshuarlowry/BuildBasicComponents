.PHONY: install start build clean lint lint-fix test test-watch test-coverage

install:
	npm install

start:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules
	rm -rf dist
	rm -rf coverage

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test

test-watch:
	npm run test:watch

test-coverage:
	npm run test:coverage 
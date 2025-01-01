.PHONY: install start build clean lint lint-fix

install:
	npm install

start:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules
	rm -rf dist 

lint:
	npm run lint

lint-fix:
	npm run lint:fix 
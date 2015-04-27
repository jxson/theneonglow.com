PATH := bin:node_modules/.bin:$(PATH)
SHELL := /bin/bash -euo pipefail

domain ?= theneonglow.com

.DEFAULT_GOAL := all

.PHONY: all
all: bundles

.PHONY: bundles
bundles: public/bundle.js

public/bundle.js: browser/index.js node_modules
	browserify --debug $< 1> $@

node_modules: package.json
	@npm prune
	@npm install
	@touch node_modules

.PHONY: clean
clean:
	@$(RM) -rf public/bundle.*
	@$(RM) -rf node_modules
	@$(RM) -rf npm-debug.log

.PHONY: deploy
deploy:
	surge --project ./public --domain $(domain)

start: all
	./bin/theneonglow server --port 8080

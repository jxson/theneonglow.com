PATH := bin:node_modules/.bin:$(PATH)
SHELL := /bin/bash -euo pipefail

domain ?= theneonglow.com

.DEFAULT_GOAL := all

.PHONY: all
all:

.PHONY: deploy
deploy:
	surge --project ./public --domain $(domain)

start: all
	./bin/theneonglow server

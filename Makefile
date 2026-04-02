NPM := $(shell command -v npm 2>/dev/null || echo /opt/homebrew/bin/npm)

.PHONY: install dev build preview

install:
	cd website && $(NPM) install

dev: install
	cd website && $(NPM) run dev

build: install
	cd website && $(NPM) run build

preview: build
	cd website && $(NPM) run preview

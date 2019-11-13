#!/usr/bin/env bash

set -e
set -o pipefail

# https://gist.github.com/DarrenN/8c6a5b969481725a4413
PACKAGE_VERSION=$(grep 'version' package.json | cut -d '"' -f4 | tr -d '[[:space:]]')

echo "Building the package…"
npm run build

echo "Running tests…"
npm run test

echo "Publishing the package to npm…"
npm publish --access=public

echo "Tagging the release…"
git tag "v${PACKAGE_VERSION}"
git push --tags

echo "All done!"

#!/bin/bash

# exit when any command fails
set -e

# rebuild each output and prepare package
npm run build:all

# make sure that there aren't any regressions in the test suite
npm run test 

# update the public demo-site (bulib.github.io/bulib-wc) with new version
npm run deploy:storybook

# publish updated package on npm with specified level 
version_bump_level=${1:-patch}
echo "$ npm version $version_bump_level"
npm version "$version_bump_level"
npm publish

# publish a new git tag/release with the same 'latest' version as npm
if [ "$version_bump_level" != "patch" ]; then
  npm_version=$(npm view bulib-wc version)
  echo "git tag -a '$npm_version' -m '$npm_version'"
  git tag -a '$npm_version' -m '$npm_version'
  git push origin --tags
fi;
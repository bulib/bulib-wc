#!/bin/bash

# exit when any command fails
set -e

# update the NPM package
npm run build:all 
npm version patch
npm publish

# update the demo-site to reflect it
npm run deploy:storybook
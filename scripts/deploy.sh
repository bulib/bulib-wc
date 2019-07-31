#!/bin/bash

# exit when any command fails
set -e

# update the NPM package
npm version patch
npm run build:all 
npm publish

# update the demo-site to reflect it
npm run deploy:storybook
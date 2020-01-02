#!/bin/bash

# exit when any command fails
set -e

# rebuild, update, and publish as package
npm run build:all

# make sure that it works
npm run test 

# update the demo-site to reflect it
npm run deploy:storybook

# update the npm version
npm version patch
npm publish
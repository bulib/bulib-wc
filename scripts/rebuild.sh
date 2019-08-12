#!/bin/bash

# exit when any command fails
set -e; 

npm run reinstall;
npm run css
npm run build:rollup;
# npm run build:owc;
npm run build:storybook;
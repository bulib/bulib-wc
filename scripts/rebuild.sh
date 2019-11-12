#!/bin/bash

# exit when any command fails
set -e; 

# run each build step/version from scratch
npm run clean;
npm run build:css;
npm run build:rollup;
# npm run build:owc;
npm run build:storybook;

# copy over select files into the 'dist/' folder
cp src/_helpers/browser_compatibility.js ./dist/;
cp sites/*/*.js ./dist/;
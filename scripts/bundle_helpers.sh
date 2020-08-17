#!/bin/bash

# combine all javascript helpers into a single file 
rm ./dist/helpers.js || true
touch ./dist/helpers.js
cat ./src/_helpers/*.js > ./dist/_helpers.js

# remove the exort {module1, module2} lines to avoid errors
sed '/export /d' ./dist/_helpers.js > ./dist/helpers.js
rm ./dist/_helpers.js
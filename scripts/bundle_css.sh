#!/bin/bash
CSS_BUNDLE_FILEPATH="dist/shared.css"

# compile scss into css
scss ./src/header/header.scss > ./src/header/header.css
scss ./src/header/mobile-nav.scss >> ./src/header/header.css

# bundle css into single 'shared' css file
mkdir dist || rm $CSS_BUNDLE_FILEPATH || true;
touch $CSS_BUNDLE_FILEPATH;
cat assets/css/*.css >> $CSS_BUNDLE_FILEPATH
cat src/header/header.css >>  $CSS_BUNDLE_FILEPATH

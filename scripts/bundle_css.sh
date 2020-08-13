#!/bin/bash
CSS_BUNDLE_FILEPATH="dist/bundle.css";

# compile scss into css
node-sass ./src/header/header.scss > ./src/header/header.css;
node-sass ./src/header/mobile-nav.scss >> ./src/header/header.css;
node-sass ./src/header/banner.scss >> ./src/header/header.css;

# bundle css into single 'shared' css file
mkdir dist || true;
cat src/announce/announce.css >  $CSS_BUNDLE_FILEPATH;
cat src/header/header.css >>  $CSS_BUNDLE_FILEPATH;
cat assets/css/*.css >> $CSS_BUNDLE_FILEPATH;

# copy site-specific css into dist/
cp src/header/header.css ./dist/header.css;
cp ./sites/libanswers/libanswers.css ./dist/libanswers.css
cp ./sites/libcal.css ./dist/libcal.css
cp ./sites/libguides/libguides.css ./dist/libguides.css 
cp ./sites/libguides/restyle.css ./dist/libguides_restyle.css 
cp ./sites/wordpress/wordpress.css ./dist/wordpress.css
cp ./sites/wordpress/homepage.css ./dist/wordpress_homepage.css 
cp ./sites/wordpress/responsive.css ./dist/wordpress_responsive.css 

# move icons into dist/
mkdir ./dist/icons || true;
cp ./assets/icons/* ./dist/icons/

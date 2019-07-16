# bulib-wc [![npm package](https://img.shields.io/npm/v/bulib-wc.svg)](https://www.npmjs.com/package/bulib-wc)

collection of web components and customizations used at Boston University Libraries

### Description

This repository contains web assets of Boston University Libraries that are used across a variety of our sites. 
  These reusable pieces can be split into categories visible on the storybook [demo page](https://bulib.github.io/bulib-wc/):
  - `lit-element`-based **[Web Components](https://github.com/bulib/bulib-wc/wiki/Web-Components)**, 
  - sample html+css snippets usable without javascript ([**nojs**](https://github.com/bulib/bulib-wc/wiki/No-Javascript)) enabled, 
  - and other **composites** of the two  


### Usage/Workflow 

#### Setup
Install dependencies via node package manager
 ```
 $ git clone https://github.com/bulib/bulib-wc.git
 $ cd bulib-wc
 $ npm install
 ```

#### Running Locally
running the following will open up a new tab in your browser at [`localhost:9001/?path=/story/`](http://localhost:9001/?path=/story/composites--ensemble), and watch for changes.
 ```
 $ npm run start
 ```
 you can make changes to _existing_ elements and see them in that running server by navigating to that component in the sidebar.
 to create a _new_ one, make a new entry in `/docs/index.stories.js` based off of the existing ones. 
 
 
#### Building
to build a bundle, run the following, noting that the default will use the `rollup.config.js`.
 ```
 $ npm run build 
 ```
 
or a bundle with `open-wc` version (with codesplitting), run:
 ```
 $ npm run build:owc 
 ```
 
you can also build a static copy of the static docs site via:
 ``` 
 $ npm run build:storybook 
 ```
 
#### Deploying
We expect to continue to manage versioning this repository with npm. 
 ```
 $ npm publish
 ```
 
that said, we want to make sure that our docs page is updated, so it's recommended to use the following, instead:
 ```
 $ npm run publish
 ```
 
if you want to update the docs page before you're finished developing, you can also update the docs directly via
 ```
 npm run deploy:storybook
 ```

# bulib-wc [![npm package](https://img.shields.io/npm/v/bulib-wc.svg)](https://www.npmjs.com/package/bulib-wc)

collection of web components and customizations used at Boston University Libraries

### Description

This repository contains web assets of Boston University Libraries that are used across a variety of our sites and 
  demonstrated in isolation via [storybook](https://bulib.github.io/bulib-wc/).

These take a number of forms...

- **site-specific code** (css, html, js) contained in `sites/`
- **cross-platform styles**, theming, and icons managed in `assets/`
- **reusable UI elements** (essentially custom widgets) in `src/`
- and some pure **vanilla javascript helpers** (`src/_helpers/`)

...and depend on a number of technologies...

- vanilla **html+css** for interoperable, failsafe, cross-platform functionality [without javascript](https://github.com/bulib/bulib-wc/wiki/No-Javascript)
- **[CSS Variables](https://github.com/bulib/bulib-wc/wiki/CSS-Variables)** for coordinating theming/branding
  (especially [colors](https://bulib.github.io/bulib-wc/?path=/story/branding--colors))
- **[Web Components](https://github.com/bulib/bulib-wc/wiki/Web-Components)** based on the `lit-element` library for more advanced functionality

...towards the end of...

- making the UI/UX/branding more consistent between platforms
- enriching and increasing the interactivity of our sites
- obtaining a greater degree of control and autonomy over our online presence from the vendors

### Usage/Workflow

#### Setup

Install dependencies via node package manager

```bash
$ brew install node
$ git clone https://github.com/bulib/bulib-wc.git
$ cd bulib-wc
$ npm install
```

_note: additional steps and troublshooting can be found in [the wiki](https://github.com/bulib/bulib-wc/wiki/Troubleshooting-Setup)_

#### Running Locally

running the following will open up a new tab in your browser at [`localhost:9001/?path=/story/`](http://localhost:9001/?path=/story/composites--ensemble), and watch for changes.

```bash
$ npm run start
```

you can make changes to _existing_ elements and see them in that running server by navigating to that component in the sidebar.
to create a _new_ one, make a new entry in `/docs/index.stories.js` based off of the existing ones

#### Building

to build a bundle, run the following, noting that the default will use the `rollup.config.js`.

```bash
$ npm run build
```

or a bundle with `open-wc` version (with codesplitting), run:

```bash
$ npm run build:owc
```

you can also build a static copy of the static docs site via:

```bash
$ npm run build:storybook
```

#### Deploying

We expect to continue to manage versioning this repository with npm.

```bash
$ npm publish
```

that said, we want to make sure that our docs page is updated, so it's recommended to use the following, instead:

```bash
$ npm run deploy
```

if you want to update the docs page before you're finished developing (without publishing the package), you can also update the _docs directly_ via

```bash
$ npm run deploy:storybook
```

#### Consuming

We consume the published package over two main CDNs ([unkpg](https://unpkg.com), [jsdelivr](https://www.jsdelivr.com/)),
  versioned and deployed using npm and added to each platform via a series of `<script>` and `<link>` tags stored in the `<head>`.

All the **web components** are imported together from a single `index.js` file. Unpkg does some mapping here to chain together a
  number of calls that leverage the `module` specification. This does the work that a bundler would do, but without the
  extra build step, transpilation, etc.

_note: one can import a specific version (e.g. `bulib-wc@0.0.92`) or the most recently published one (`bulib@latest`)_

```html
<!-- load web components -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.min.js"></script>
<script src="https://unpkg.com/bulib-wc@0.1.0/src/index.js?module" type="module"></script>
```

For the **css**, we have both a shared bundle (created via `scripts/bundle_css.sh`), and site-specific forms for each `site_name`. 
  These are imported via `<link>` like the following:

```html
<!-- styling -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@0.1.0/dist/bundle.min.css">
<!--link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/{site_name}.css"-->
```

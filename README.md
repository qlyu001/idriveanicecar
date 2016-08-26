# Web Development Starter Tool
Super lightweight npm build tool made for frond end web development.

## Features
- Lightweight NPM Build Tool
- Browsersync
- html partials ([Sniplicity](https://www.npmjs.com/package/sniplicity))
- Browserify
- Sass and Autoprefixer
- JS, Sass minify
- JS, Sass mapping

## Requirement
Be sure to have node and npm installed on your development machine.

## Installation
1. Clone the repository: `$ git clone https://github.com/jackchuka/web-tool.git`
2. Install NPM dependencies: `$ npm install`
3. Run: `$ npm run serve`

## Options
###### `$ npm run build`
Builds your current `src` directory to `dist`
###### `$ npm run build:prod`
Builds production ready files to `dist`. (CSS, Javascript minifed version)
###### `$ npm run serve`
Builds and serves on localhost and watches any changes made in `src`
###### `$ npm run serve:prod`
Builds and serves production ready files on localhost

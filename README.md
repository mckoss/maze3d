# Maze3D

The ultimate goal of this repo is to generate svg files rendering 3-dimensional
mazes.

As an intermediate step, we use THREE.js to build and visualize the mazes,
and select a rendering.

# Building this repo

This repo uses ES6 modules for all TypeScript files.  There are also included
testing and code coverage frameworks.  [Vite](https://vitejs.dev/) is used
to bundle Typescript code for use in the browser.

## Run the Vite dev server

This uses hot module replacement, so you can just edit and save files
and the web site/app will be updated automatically.

```
$ npm install
$ npm run dev
```

Similarly, you can run tests:

```
$ npm test
```

Or, run tests with code coverage:

```
$npm run coverage
```

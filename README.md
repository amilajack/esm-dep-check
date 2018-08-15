esm-dep-check
=============
[![Build Status](https://travis-ci.org/amilajack/esm-dep-check.svg?branch=master)](https://travis-ci.org/amilajack/esm-dep-check) [![Greenkeeper badge](https://badges.greenkeeper.io/amilajack/esm-dep-check.svg)](https://greenkeeper.io/)

A micro utility that checks which of your dependencies use the `module` or `jsnext:main` property in their `package.json`.

### What?
Any package with a `module` or `jsnext:main` in its `package.json` provides a version of that package that doesn't have its modules transpiled. This tool lists all the packages that don't have either of those properties.

### Why?
**Smaller build size and better performance**: Transpiled makes static analysis significantly more difficult. This means that dead code stripping, tree shaking, and other optimizations through static analysis will be much more difficult. This tool tells you which packages ship with


### Installation
```bash
npm install -g esm-dep-check
```

### Usage
```bash
# Shorthand alias
edc
# OR
esm-dep-check
```

### Node API
```js
import edc from 'esm-dep-check';

edc('./project/package.json')
// [
//   {
//     "name": "chalk",
//     "supportsEsm": false,
//   },
//   {
//     "name": "cli-table3",
//     "supportsEsm": false,
//   },
//   {
//     "name": "commander",
//     "supportsEsm": false,
//   }
// ]
```

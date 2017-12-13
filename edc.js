#!/usr/bin/env node
const program = require('commander');
const { version } = require('./package.json');



program
  .version(version)
  .description('esm-dep-check - A micro utility that checks which of your dependencies use the `module` or `jsnext:main` property in their `package.json`.')
  .command('list', 'list the dependencies which support esm modules', { isDefault: true })
  .parse(process.argv);

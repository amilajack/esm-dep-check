#!/usr/bin/env node
const program = require('commander');

program
  .version('0.1.0')
  .description('esm-dep-check - A micro utility that checks which of your dependencies use the `module` or `jsnext:main` property in their `package.json`.')
  .command('list', 'list the dependencies which support esm modules', { isDefault: true })
  .parse(process.argv);

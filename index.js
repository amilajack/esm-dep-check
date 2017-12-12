#!/usr/bin/env node
const program = require('commander');
const depCheck = require('./src/DepCheck');

program
  .version('0.1.0')
  .parse(process.argv);

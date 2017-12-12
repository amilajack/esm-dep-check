const fs = require('fs');
const path = require('path');
const Table = require('cli-table2');
const chalk = require('chalk');


const usrPkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')).toString());

const table = new Table({
  head: [chalk.bold.black('Dependency'), chalk.bold.black('"module"/"jsnext:main"')],
  colWidths: [30, 30]
});

exports.default = Object.keys(usrPkg.dependencies || {}).map((dep) => {
  const pkgPath = path.join(process.cwd(), 'node_modules', dep, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());

  if ('dependencies' in pkg) {
    table.push([
      dep,
      ('module' in pkg || 'jsnext:main' in pkg)
        ? chalk.green('true')
        : chalk.red('false')
    ]);
  }

  return {
    name: dep,
    supportsEsm: 'dependencies' in pkg
  }
});

console.log(table.toString());

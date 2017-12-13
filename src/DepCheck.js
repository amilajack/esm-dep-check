/* eslint fp/no-mutation: 0 */
const fs = require('fs');
const path = require('path');

exports.default = (userPkgPath = path.join(process.cwd(), 'package.json')) => {
  const userPkg = fs.existsSync(userPkgPath)
    ? JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')).toString())
    : {
      dependencies: []
    };

  return Object.keys(userPkg.dependencies || {}).map((dep) => {
    const pkgPath = path.join(process.cwd(), 'node_modules', dep, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());

    return {
      name: dep,
      supportsEsm: 'module' in pkg || 'jsnext:main' in pkg
    };
  });
};

const fs = require('fs');
const path = require('path');
const usrPkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')).toString());

Object.keys(usrPkg.dependencies || {}).forEach((dep) => {
  const pkgPath = path.join(process.cwd(), 'node_modules', dep, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());

  if ('dependencies' in pkg) {
    console.log(
      `${dep}: ${'module' in pkg || 'jsnext:main' in pkg}`
    );
  }
});

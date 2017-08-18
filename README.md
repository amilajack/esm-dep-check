esm-dep-check
=============

A micro utility that checks which of your dependencies use the `module` or `jsnext:main` property in their `package.json`.

### What?
Any package with a `module` or `jsnext:main` in its `package.json` provides a version of that package that doesn't have its modules transpiled. This tool lists all the packages that don't have either of those properties.

### Why?
**Smaller build size and better performance**: Transpiled makes static analysis significantly more difficult. This means that dead code stripping, tree shaking, and other optimizations through static analysis will be much more difficult. This tool tells you which packages ship with

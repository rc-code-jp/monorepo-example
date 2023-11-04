const path = require('path');

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => f).join(' ')}`;

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

// const buildTypeScriptCommand = () => `tsc -p tsconfig.json --noEmit`;

// const buildStylelintCommand = (filenames) => `stylelint ${filenames.join(' ')}`

module.exports = {
  '**/*.{ts,tsx}': [buildPrettierCommand, buildEslintCommand],
  // '**/*.{ts,tsx}': [buildTypeScriptCommand],
  // '**/*.scss': [buildStylelintCommand],
};

module.exports = {
  '**/*.{json,md,yml}': ['npx prettier --write'],
  '**/*.{js,jsx,ts,tsx}': ['npx prettier --write', 'eslint --cache --fix'],
  '.editorconfig': ['prettier --write', 'git add'],
};

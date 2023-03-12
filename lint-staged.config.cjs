module.exports = {
  '**/*.{json,md,yml}': ['npx prettier --write', 'git add'],
  '**/*.{js,jsx,ts,tsx}': ['npx prettier --write', 'eslint --cache --fix', 'git add'],
  '.editorconfig': ['prettier --write', 'git add'],
};

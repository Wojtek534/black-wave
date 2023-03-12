module.exports = {
  '**/*.{json,md,yml}': ['prettier --write', 'git add'],
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix', 'git add'],
  '.editorconfig': ['prettier --write', 'git add'],
};

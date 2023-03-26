![alt text](https://github.com/Wojtek534/black-wave/blob/main/assets/svg/logo.svg)

# [IN PROGRESS] Black Wave

## React base collection of components with storybook example

## Intended to use as main repository's [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Submodule

To add repository as submodule to your project simply type:
```console git submodule add https://github.com/Wojtek534/black-wave.git src/blackwave` (or any preffered path)

## Requirements:

- Tailwind
- React
- Headless UI

### Main Goals

1. Components styling can be easily modified without changing it's implementation.
2. Styling components need to be consistent
3. Adjusting or expanding styling options can't break refrences

### Storybook

1. Clone repository
2. Type `npm install` or any other package manager
3. Run `npm run storybook` to launch

### Vs code recommended settings

{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"prettier.enable": false,
"vite.autoStart": false
}

# Demotivator

<p align="center">
  <em>
    JavaScript
    · Node.js
  </em>
  <br />
  <em>
    HTML
    · CSS
    · SCSS
  </em>
  <br />
  <em>
    Powershell
    · ESLint
    · Mocha
    · Puppeteer
  </em>
  <br />
  <br />
</p>

<p align="center">
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3AProd+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/actions/workflow/status/prettier/prettier/prod-test.yml?label=Prod&style=flat-square"></a>
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3ADev+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/actions/workflow/status/prettier/prettier/dev-test.yml?label=Dev&style=flat-square"></a>
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3ALint+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/actions/workflow/status/prettier/prettier/lint.yml?label=Lint&style=flat-square"></a>
  <a href="https://codecov.io/gh/prettier/prettier">
    <img alt="Codecov Coverage Status" src="https://img.shields.io/codecov/c/github/prettier/prettier.svg?style=flat-square"></a>
    <br/>
  <a href="https://twitter.com/acdlite/status/974390255393505280">
    <img alt="Blazing Fast" src="https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/v/prettier.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
</p>

With this visual studio extension, you can demotivate your programming friends by showing them a random demotivational image each time they make an error in their code.

## Features

- Displays a random demotivational image each time an error is encountered in the Visual Studio Code console.
- Supports custom demotivational image directories in the workspace or globally.
- Configurable options to control the frequency and severity of demotivational images.

## Requirements

- Visual Studio Code version 1.60.0 or higher.
- Node.js version 14.0.0 or higher.

## Extension Settings

This extension contributes the following settings:

- `demotivator2.enable`: Enable/disable this extension.
- `demotivator2.directory`: Set the directory containing demotivational images. Defaults to `"./images/demotivational"`.
- `demotivator2.frequency`: Set the frequency of demotivational images. Defaults to `"10"`, meaning a new image will be shown every 10 errors.
- `demotivator2.severity`: Set the severity of demotivational images. Defaults to `"error"`, meaning images will only be shown for errors. Other options include `"warning"` and `"info"`.

## Usage

1. Install the extension by searching for "demotivator2" in the Visual Studio Code extensions marketplace.
2. Open a workspace or create a new one.
3. Create a subdirectory named `images/demotivational` in the root of your workspace.
4. Add some demotivational images to the `images/demotivational` directory.
5. Open the Visual Studio Code console by pressing `Ctrl+Shift+P` and selecting "Toggle Integrated Terminal".
6. Write some code that generates an error in the console (e.g. `console.log(foo.bar)`).
7. Enjoy your demotivational image!

## Known Issues

- The extension may not work correctly on Windows systems with certain filesystem configurations.
- Some demotivational images may not be suitable for all audiences.

## Release Notes

### 1.0.0

Initial release of demotivator2.

### 1.0.1

- Fixed issue for showing notifications.
- Improved documentation and examples.

### 1.1.0

- Added support for custom demotivational image directories.
- Added configurable options for frequency and severity of demotivational images.
- Improved error handling and logging.

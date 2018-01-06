# Angular Custom Webpack Environment

This is a custom Angular environment setup, i.e.**without Angular CLI**
**Currently supports latest Angular 5.0**

### The problem

When you generate a project with Angular CLI (aka `ng new awesome-project`) you get all batteries you need to write your code, unit tests, etc.

However, when you start to dive deeper and want to modify your workflow (e.g. add custom loaders, add some functionality to process images, etc.) it's not possible, because webpack configuration is hidden from you. This is not a bug. It was intentionally made by Angular developers due to "Addon system" implementation. More details about it [here](https://github.com/angular/angular-cli/issues/1656#issuecomment-239366723).

### The solution

[Angular documentation](https://angular.io/guide/webpack) explains how to configure your own **overridable** webpack config. This repository is basically the result of all steps described in this configuration + bug fixing and updates. It supports latest (by the time of that commit) **Angular version 5.0.0**, unit tests by karma and end-to-end tests by protractor.

This setup gives you freedom that is hidden with open webpack configuration and comfort to create components, modules, pipes using angular cli. 


## Development server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Test1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Final 

ng new test2 --style=scss --routing --skip-tests --minimal

--minimal
--skip-tests

--skip-tests --skip-e2e



ng generate component home

ng g c about 


# App Deployment

ng build --prod

npm install -g angular-cli-ghpages


## or create a new repository on the command line
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/ward07/example-ng6.git
git push -u origin master


ng build --prod --base-href="https://<username>.github.io/<repo-name>/"
ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY_NAME/"
ng build --prod --base-href "https://ward07.github.io/example-ng6/"


angular-cli-ghpages
ngh
angular-cli-ghpages --dir dist/example-ng6



## …or create a new repository on the command line

echo "# ward07.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ward07/ward07.github.io.git
git push -u origin master


## …or push an existing repository from the command line

git remote add origin git@github.com:ward07/ward07.github.io.git
git push -u origin master


rm -rf .git

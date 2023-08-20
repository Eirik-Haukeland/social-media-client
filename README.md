[![check if brash is formatted correctly](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/format-check.yaml/badge.svg)](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/format-check.yaml)
[![check if brash passes end to end tests](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/e2e-test.yml)
[![check if brash passes unit testing](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Eirik-Haukeland/social-media-client/actions/workflows/unit-test.yml)

# [README: Semester project 1](https://github.com/Eirik-Haukeland/social-media-client)
by [Eirik Berget Haukeland](https://github.com/Eirik-Haukeland)

This repo forked from [Noroff social media](https://github.com/NoroffFEU/social-media-client) as part of a school project.

## Built With
- Html
- Scss
- JavaScript

### Build commands

builds the scss
```shell
npm run build
```

continuously build and deploy 
```shell
npm run start
```

## working in the repo
in this repo you can not push directly to the master brash.
you will need to make a separate branch and then incorporate it with a [pr](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

example of making branch:
```shell
git branch [branch-name]
```

to push to the repo you will also need to follow the air-bnb style guide as the repo is set up to not accept anything else.

### for linting there is sett up a couple of commands:

to check for problems in formatting
```shell
npm run lint-check
```

to fix minor problems in formatting
```shell
npm run lint-fix
```

you will also want ot test the code as it needs to pass the unit tests and end to end testing before you can merge to master

for checking all tests
```shell
npm run test
```

for checking unit tests
```shell
npm run test-unit
```

for checking end-to-end testing
```shell
npm run test-e2e
```

### information for testing

In this project we use [jest](https://jestjs.io/) for unit testing
and [cypress](https://docs.cypress.io/guides/overview/why-cypress) for our end-to-end testing

All unit test are to be placed in test/js if you have mock data then place that in test/mocks. All end-to-end test are to be placed in cypress/e2e
# Draconian

Draconian is an ultity library for declaratively defining parameter constraints in JavaScript functions. It believes function parameter validation should be extracted from the function itself, and written in a declarative way such that the resulting code is clean and elegant. The parameter validation declaration should also server as documentation that is guaranteed to be up to date.

## Setup

To install:

    npm install draconian

Or add the following line to your package.json's dependencies object:

    "draconian": "*"

To contribute as a developer, you'll need Mocha for run the tests via:

    npm test

## API

Draconiian'ize a function by doing the following:

    var testFunc = Drac.define({
      params: {
        num1: { type: 'number' },
        num2: { type: 'number' optional: true },
        str: { type: 'string' }
      }
    }, function(num1, num2, str) { return num1 + num2 + str; });

And call it:

    testFunc(1, 2, 'hi'); // ouputs 3hi
    testFunc(1, 2, 3); // exception!

### Parameter Options

    // type
    // JavaScript native type
    // { type: 'number' }

    // instance
    // JavaScript parent constructor function, same as instanceof
    // { instance: Array }

    // match
    // JavaScript string regex match
    // { match: /abcde/ }

    // notMatch
    // opposite of match
    // { notMatch: /abcde/ }

    // isEmail
    // whether the parameter matches /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+$/
    // { isEmail: true }

    // optional
    // whether the parameter can be undefined
    // { optional: true }

## Contribute

contact the author Max You at max.you15@gmail.com

## Changelog

0.0.3

- [Feature] add parameter instance checking

0.0.2

- [Feature] enable optional parameters
- [Refactor] perform massive refactor
- [Docs] add basic README.md

0.0.1

- [Feature] add parameter type checking

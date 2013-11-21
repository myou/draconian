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

    // isUrl
    // whether the parameter matches /^https?:\/\/[a-zA-Z0-9\/._-]+$/
    // { isUrl: true }

    // notNull
    // whether the parameter cannot be null
    // { notNull: true }

    // notEmpty
    // whether the parameter cannot be empty
    // { notEmpty: true }

    // isIn
    // whether the parameter is one of predefined values
    // { isIn: ['hello', 3, false] }

    // notIn
    // whether the parameter is not one of predefined values
    // { notIn: ['hello', 3, false] }

    // len
    // whether the parameter length is within predefined range
    // { len: [2, 5] }

    // min
    // whether the parameter is above or equal to min value
    // { min: 0 }

    // max
    // whether the parameter is below or equal to max value
    // { max: 0 }

    // range
    // whether the parameter is inside (inclusive) range
    // { range: [-5, 5] }

    // isDate
    // whether the parameter can be converted to date
    // { isDate: true }

    // isISODate
    // whether the parameter is an ISO date string
    // { isISODate: true }

    // optional
    // whether the parameter can be undefined
    // { optional: true }

## Contribute

contact the author Max You at max.you15@gmail.com

## Changelog

0.0.8

- [Feature] add parameter is date check
- [Feature] add parameter is ISO date string check

0.0.7

- [Feature] add parameter min check
- [Feature] add parameter max check
- [Feature] add parameter range check
- [Refactor] adjust error messages wordings
- [Docs] minor example rule modification

0.0.6

- [Feature] add parameter is in check
- [Feature] add parameter not in check
- [Feature] add parameter len check

0.0.5

- [Feature] add parameter not null check
- [Feature] add parameter not empty check
- [Refactor] split tests into one file per rule

0.0.4

- [Feature] add parameter regex match check
- [Feature] add parameter regex not match check
- [Feature] add parameter is email check
- [Feature] add parameter is url check
- [Docs] fix erroneous function result in API doc
- [Docs] improve API doc format

0.0.3

- [Feature] add parameter instance check

0.0.2

- [Feature] enable optional parameters
- [Refactor] perform massive refactor
- [Docs] add basic README.md

0.0.1

- [Feature] add parameter type check

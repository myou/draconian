
// module dependencies
var DracEngine = require('./drac_engine');

// module main objects
var Drac = {};

/**
 * define rules for a regular function
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Object} options, see README.md API for details
 * @param {Function} func, original function to decorate
 *
 * @return {Function} resulting decorated function
 */

Drac.define = function(options, func) {
  options.style = options.style || 'regular';

  if (options.style === 'regular') {
    return Drac.regular(options, func);
  } else if (options.style === 'async') {
    return Drac.async(options. func);
  } else {
    throw new Error('Function style must be regular or async, given: ' + options.style);
  }
};

/**
 * define rules for a regular function
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Object} options, see README.md API for details
 * @param {Function} func, original function to decorate
 *
 * @return {Function} resulting decorated function
 */

Drac.regular = function(options, func) {
  var innerFuncWrapper = function() {
    var args = [];
    var paramsObj = arguments[0];
    for (var paramName in paramsObj) {
      if (paramsObj.hasOwnProperty(paramName)) args.push(paramsObj[paramName]);
    }
    return func.apply(this, args);
  };

  var dracFunc = DracEngine.draconize(options.params, innerFuncWrapper);
  return function() {
    return dracFunc.apply(this, [arguments])
  };
};

/**
 * define rules for a function with async-style named parameters
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Object} options, see README.md API for details
 * @param {Function} func, original function to decorate
 *
 * @return {Function} resulting decorated function
 */

Drac.async = function(options, func) {
  return DracEngine.draconize(options.params, func);
};

// module exports
module.exports = Drac;

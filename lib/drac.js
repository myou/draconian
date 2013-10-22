
var ParamsDecorator = require('./params_decorator');

// main module object
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
  // TODO: use command patterns to chain decorators
  return ParamsDecorator.decorate(options.params, func);
};

module.exports = Drac;

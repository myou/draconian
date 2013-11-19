
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
  return DracEngine.draconize(options.params, func);
};

// module exports
module.exports = Drac;


// module main object
var ParamsDecorator = {};

/**
 * decorate function with parameter rule checks
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @throws Error
 *
 * @params {Object} paramRules, parameter rules
 * @params {Function} func, function to decorate
 *
 * @return {Any} the original func's return values if invoked
 */

ParamsDecorator.decorate = function(paramRules, func) {
  return function() {
    // TODO: abstract params consumer
    var index = 0;
    for (var paramName in paramRules) {
      // TODO: abstract rule class
      ParamsDecorator.checkRule(paramName, paramRules[paramName], arguments[index]);
      index++;
    }

    // TODO: improve error message
    if (index < arguments.length) {
      throw new Error('Extra parameter passed in.');
    }

    // TODO: test this!
    return func.apply(this, arguments);
  };
};

/**
 * check param rule
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @throws Error
 *
 * @params {String} paramName, name of the parameter
 * @params {Object} paramRule, parameter rule
 * @params {Any} param, actual passed in parameter
 *
 * @return {Undefined}
 */

// TODO: refactor into reactive addRule
ParamsDecorator.checkRule = function(paramName, paramRule, param) {
  if (param === undefined && paramRule.optional) return;

  if (param === undefined) {
    throw new Error('param ' + paramName + ' missing');
  }

  if (paramRule.type && paramRule.type !== typeof param) {
    // TODO: improve error message
    throw new Error('Invalid parameters');
  }
};

// module exports
module.exports = ParamsDecorator;

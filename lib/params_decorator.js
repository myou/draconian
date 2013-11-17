
// TODO: fix rule-related names, esp paramRule-related, and rule error list related
// TODO: maybe we do need a Rule class
// TODO: read jsdom complete spec
// TODO: rename param to paramValue

// module dependencies
var RuleBook = require('./rule_book');

// module main objects
var ParamsDecorator = {};

/**
 * decorate function with parameter rule checks
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @throws Error
 *
 * @params {Object} paramsRules, parameters rules
 * @params {Function} func, function to decorate
 *
 * @return {Any} the original func's return values if invoked
 */

ParamsDecorator.decorate = function(paramsRules, func) {
  preprocessParamsRules(paramsRules);

  return function() {
    ruleErrorList = applyParamsRules(arguments, paramsRules);

    if (ruleErrorList.length !== 0) {
      errorMessage = ruleErrorList.join(', ');
      throw new Error(errorMessage);
    }

    return func.apply(this, arguments);
  };
};

/**
 * preprocess parameters rules
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @params {Object} paramsRules, parameters rules
 *
 * @return {Undefined}
 */

preprocessParamsRules = function(paramsRules) {
  for (var paramName in paramsRules) {
    var paramRules = paramsRules[paramName];
    addDefaultParamRules(paramRules);
  }
};

/**
 * add default parameter rules
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @params {Object} paramRules, parameter rules
 *
 * @return {Undefined}
 */

addDefaultParamRules = function(paramRules) {
  paramRules.optional = paramRules.optional || false;
};

/**
 * check parameters rules and aggregate rules
 *
 * @author Max You <max.you15@gmail.com
 *
 * @params {Arguments} args, arguments used to invoke original function
 * @params {Object} paramsRules, parameters rules
 *
 * @return {Array} list of error messages, empty if all rules passed
 */

applyParamsRules = function(args, paramsRules) {
  var ruleErrorList = [];

  var index = 0;
  for (var paramName in paramsRules) {
    var param = args[index];
    var paramRules = paramsRules[paramName];
    index++;

    var paramRuleErrorList = applyParamRules(paramName, param, paramRules);
    ruleErrorList = ruleErrorList.concat(paramRuleErrorList);
  }

  if (index < args.length) {
    errorMessage = '' +
      'error="invalid parameter list" ' +
      'errorMessage="expected ' + index + ' '
      'but got ' + args.length + '"';
    ruleErrorList.push(errorMessage);
  }

  ruleErrorList = ruleErrorList.filter(function(ruleError) { return ruleError });
  return ruleErrorList;
};

/**
 * check parameter rules
 *
 * @author Max You <max.you15@gmail.com
 *
 * @params {String} paramName, parameter name
 * @params {Any} param, parameter value
 * @params {Object} paramRules, parameter rules
 *
 * @return {Array} list of error messages, empty if all rules passed
 */

applyParamRules = function(paramName, param, paramRules) {
  if (paramRules.optional && param === undefined) return;

  var paramRuleErrorList = [];

  for (var ruleName in paramRules) {
    paramRuleErrorList.push(applyRule(paramName, param, ruleName, paramRules[ruleName]));
  }

  paramRuleErrorList = paramRuleErrorList.filter(function(ruleError) { return ruleError });
  return paramRuleErrorList;
};

/**
 * check parameter rules
 *
 * @author Max You <max.you15@gmail.com
 *
 * @params {String} paramName, parameter name
 * @params {Any} param, parameter value
 * @params {String} ruleName, parameter rule name
 * @params {Any} ruleValue, parameter rule value
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

applyRule = function(paramName, param, ruleName, ruleValue) {
  errorMessage = RuleBook[ruleName](param, ruleValue);
  if (!errorMessage) return;

  // TODO: use JSON and convert to string
  // TODO: write new open source project for the more advanced error format
  errorMessage = '' +
    'error="invalid parameter" ' +
    'parameterName="' + paramName + '" ' +
    'parameterValue="' + param + '" ' +
    'errorMessage="' + errorMessage +'"';
  return errorMessage;
};

// module exports
module.exports = ParamsDecorator;

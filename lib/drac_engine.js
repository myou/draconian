
// TODO: maybe we do need a Rule class
// TODO: read jsdom complete spec

// module dependencies
var RuleBook = require('./rule_book');

// module main objects
var DracEngine = {};

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

DracEngine.draconize = function(paramsRules, func) {
  preprocessParamsRules(paramsRules);

  return function() {
    paramsRulesErrorList = applyParamsRules(arguments, paramsRules);

    if (paramsRulesErrorList.length !== 0) {
      errorMessage = paramsRulesErrorList.join(', ');
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
  var paramRulesErrorList = [];

  var index = 0;
  for (var paramName in paramsRules) {
    var paramValue = args[index];
    var paramRules = paramsRules[paramName];
    index++;

    var paramRuleErrorList = applyParamRules(paramName, paramValue, paramRules);
    paramRulesErrorList = paramRulesErrorList.concat(paramRuleErrorList);
  }

  if (index < args.length) {
    errorMessage = '' +
      'error="invalid parameter list" ' +
      'errorMessage="expected ' + index + ' '
      'but got ' + args.length + '"';
    paramRulesErrorList.push(errorMessage);
  }

  paramRulesErrorList = paramRulesErrorList.filter(function(ruleError) { return ruleError });
  return paramRulesErrorList;
};

/**
 * check parameter rules
 *
 * @author Max You <max.you15@gmail.com
 *
 * @params {String} paramName, parameter name
 * @params {Any} paramValue, parameter value
 * @params {Object} paramRules, parameter rules
 *
 * @return {Array} list of error messages, empty if all rules passed
 */

applyParamRules = function(paramName, paramValue, paramRules) {
  if (paramRules.optional && paramValue === undefined) return;

  var paramRuleErrorList = [];

  for (var ruleName in paramRules) {
    paramRuleErrorList.push(applyRule(paramName, paramValue, ruleName, paramRules[ruleName]));
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
 * @params {Any} paramValue, parameter value
 * @params {String} ruleName, parameter rule name
 * @params {Any} ruleValue, parameter rule value
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

applyRule = function(paramName, paramValue, ruleName, ruleValue) {
  errorMessage = RuleBook[ruleName](paramValue, ruleValue);
  if (!errorMessage) return;

  // TODO: use JSON and convert to string
  // TODO: write new open source project for the more advanced error format
  errorMessage = '' +
    'error="invalid parameter" ' +
    'parameterName="' + paramName + '" ' +
    'parameterValue="' + paramValue + '" ' +
    'errorMessage="' + errorMessage +'"';
  return errorMessage;
};

// module exports
module.exports = DracEngine;

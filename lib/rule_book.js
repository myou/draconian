
// module main objects
var RuleBook = {};

/**
 * parameter check rule for parameter type
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.type = function(paramValue, ruleValue) {
  if (ruleValue !== typeof paramValue) return 'Invalid parameter type';
};

/**
 * parameter check rule for parameter instance
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.instance = function(paramValue, ruleValue) {
  if (!(paramValue instanceof ruleValue)) return 'Invalid parameter instance';
};

/**
 * parameter check rule for parameter match
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.match = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') return 'Invalid parameter, must be string to try to match';
  if (!(paramValue.match(ruleValue))) return 'Parameter does not match';
};

/**
 * parameter check rule for parameter match
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.match = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') return 'Invalid parameter, must be string to try to match';
  if (!(paramValue.match(ruleValue))) return 'Parameter does not match';
};

/**
 * parameter check rule for parameter not match
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.notMatch = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') return 'Invalid parameter, must be string to try to match';
  if (paramValue.match(ruleValue)) return 'Parameter matched when it should not';
};

/**
 * parameter check rule for parameter type
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.optional = function(paramValue, ruleValue) {
  if (!ruleValue && paramValue === undefined) return 'Missing required parameter';
};

// module exports
module.exports = RuleBook;


// module main objects
var RuleBook = {};

/**
 * parameter check rule for parameter type
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} param, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.type = function(param, ruleValue) {
  if (ruleValue !== typeof param) return 'Invalid parameter type';
};

/**
 * parameter check rule for parameter instance
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} param, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.instance = function(param, ruleValue) {
  if (!(param instanceof ruleValue)) return 'Invalid parameter instance';
};

/**
 * parameter check rule for parameter type
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} param, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.optional = function(param, ruleValue) {
  if (!ruleValue && param === undefined) return 'Missing required parameter';
};

// module exports
module.exports = RuleBook;

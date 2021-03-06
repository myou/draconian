
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
  if (typeof paramValue !== 'string') {
    return 'Parameter cannot be non-string in match check';
  }
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
  if (typeof paramValue !== 'string') {
    return 'Parameter cannot be non-string in not match check';
  }
  if (paramValue.match(ruleValue)) return 'Parameter matched when it should not';
};

/**
 * parameter check rule for parameter is email
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.isEmail = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') return 'Email parameter cannot be non-string';
  if (ruleValue && !paramValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+$/)) {
    return 'Parameter not an email address';
  }
};

/**
 * parameter check rule for parameter is url
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.isUrl = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') return 'Url parameter cannot be non-string';
  if (ruleValue && !paramValue.match(/^https?:\/\/[a-zA-Z0-9\/._-]+$/)) {
    return 'Parameter not an url';
  }
};

/**
 * parameter check rule for parameter not null
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.notNull = function(paramValue, ruleValue) {
  if (ruleValue && paramValue === null) return 'Parameter cannot be null';
};

/**
 * parameter check rule for parameter not null
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.notEmpty = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'string') {
    return 'Parameter cannot be non-string for nonempty check';
  }
  if (ruleValue && paramValue === '') return 'Parameter cannot be empty';
};

/**
 * parameter check rule for parameter is one of predefined values
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.isIn = function(paramValue, ruleValue) {
  if (ruleValue.indexOf(paramValue) === -1) {
    return 'Parameter not one of predefined values';
  }
};

/**
 * parameter check rule for parameter is not one of predefined values
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.notIn = function(paramValue, ruleValue) {
  if (ruleValue.indexOf(paramValue) !== -1) {
    return 'Parameter matched one of predefined forbidden values';
  }
};

/**
 * parameter check rule for parameter's length is within range
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.len = function(paramValue, ruleValue) {
  var length = paramValue.length;
  if (length === undefined) {
    return 'Parameter does not have length attribute';
  }
  if (length <= ruleValue[0] || length >= ruleValue[1]) {
    return 'Parameter length outside allowed range';
  }
};

/**
 * parameter check rule for parameter minimum value
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.min = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'number' || isNaN(paramValue)) {
    return 'Parameter cannot be NaN or non-number to compare with minimum';
  }
  if (paramValue < ruleValue) return 'Parameter below minimum value allowed';
};

/**
 * parameter check rule for parameter maximum value
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.max = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'number' || isNaN(paramValue)) {
    return 'Parameter cannot be NaN or non-number to compare with maximum';
  }
  if (paramValue > ruleValue) return 'Parameter above maximum value allowed';
};

/**
 * parameter check rule for parameter range
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.range = function(paramValue, ruleValue) {
  if (typeof paramValue !== 'number' || isNaN(paramValue)) {
    return 'Parameter cannot be NaN or non-number to compare with range';
  }
  if (paramValue < ruleValue[0] || paramValue > ruleValue[1]) {
    return 'Parameter outside allowed range';
  }
};

/**
 * parameter check rule for parameter can be converted to date
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

RuleBook.isDate = function(paramValue, ruleValue) {
  if (!ruleValue) return;
  var date = new Date(paramValue);
  if (isNaN(date.getTime())) return 'Parameter cannot be converted to date';
};

/**
 * parameter check rule for parameter is ISO date string
 *
 * @author Max You <max.you15@gmail.com>
 *
 * @param {Any} paramValue, parameter to examine
 * @param {Any} ruleValue, rule setting
 *
 * @return {Undefined|String} undefined if rule passes, else error message
 */

var ISODateRegex1 =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))/;
var ISODateRegex2 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var ISODateRegex3 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
RuleBook.isISODate = function(paramValue, ruleValue) {
  if (!ruleValue) return;
  if (typeof paramValue !== 'string') {
    return 'ISO date string parameter cannot be non-string';
  }
  var match1 = paramValue.match(ISODateRegex1);
  var match2 = paramValue.match(ISODateRegex2);
  var match3 = paramValue.match(ISODateRegex3);
  if (!match1 && !match2 && !match3) {
    return 'Parameter not a valid ISO date string';
  }
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

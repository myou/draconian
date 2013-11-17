
// module dependencies
var expect = require('chai').expect;

var Drac = require('../');

describe('regular functions, typeof rules', function() {
  var testFunc = Drac.define({
    params: {
      num1: { typeOf: 'number' },
      num2: { typeOf: 'number' },
      str: { typeOf: 'string' }
    }
  }, function(num1, num2, str) { return num1 + num2 + str; });

  it('should give correct result', function() {
    var result = testFunc(1, 2, 'hi');
    expect(result).to.equal('3hi');
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc(1, 2);
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc(1, 2, 'hi', 3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(1, 2, 3);
    }).to.throw(Error);
  });
});

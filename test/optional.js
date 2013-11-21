
var expect = require('chai').expect;

var Drac = require('../');

describe('type rules with optional parameters', function() {
  var testFunc = Drac.define({
    params: {
      num1: { type: 'number' },
      num2: { type: 'number' },
      str: {
        type: 'string',
        optional: true
      }
    }
  }, function(num1, num2, str) { return num1 + num2 + str; });

  it('should not throw error on missing optional parameters', function () {
    var result = testFunc(1, 2);
    expect(result).to.be.NaN;
  });
});

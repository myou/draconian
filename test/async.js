
var expect = require('chai').expect;

var Drac = require('../');

describe('type rules', function() {
  var testFunc = Drac.async({
    params: {
      num1: { type: 'number' },
      num2: { type: 'number' },
      str: { type: 'string' }
    }
  }, function(options, callback) {
    var result = options.num1 + options.num2 + options.str;
    return callback(null, result);
  });

  it('should give correct result', function() {
    testFunc({
      num1: 1,
      num2: 2,
      str: 'hi'
    }, function(err, result) {
      expect(err).to.not.exist;
      expect(result).to.equal('3hi');
    });
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc({ num1: 1, num2: 2 });
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc({ num1: 1, num2: 2, str: 'hi', num3: 4 });
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc({ num1: 1, num2: 2, str: 3 });
    }).to.throw(Error);
  });
});

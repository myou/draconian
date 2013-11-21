
var expect = require('chai').expect;

var Drac = require('../');

describe('max rules', function () {
  var testFunc = Drac.define({
    params: {
      num: { max: 0 }
    }
  }, function(num) { return 'num: ' + num; });

  it('should give correct result', function() {
    var result = testFunc(-5);
    expect(result).to.equal('num: -5');
  });

  it('should throw error on non-number parameters', function () {
    expect(function() {
      testFunc(NaN);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(5);
    }).to.throw(Error);
  });
});

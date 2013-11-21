
var expect = require('chai').expect;

var Drac = require('../');

describe('range rules', function () {
  var testFunc = Drac.define({
    params: {
      num: { range: [-5, 5] }
    }
  }, function(num) { return 'num: ' + num; });

  it('should give correct result', function() {
    var result = testFunc(0);
    expect(result).to.equal('num: 0');
  });

  it('should throw error on non-number parameters', function () {
    expect(function() {
      testFunc(NaN);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(10);
    }).to.throw(Error);
  });
});

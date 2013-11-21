
var expect = require('chai').expect;

var Drac = require('../');

describe('is ISO date rules', function () {
  var testFunc = Drac.define({
    params: {
      date: { isISODate: true }
    }
  }, function(date) { return 'year: ' + new Date(date).getFullYear(); });

  it('should give correct result', function() {
    var result = testFunc(new Date().toISOString());
    expect(result).to.equal('year: ' + new Date().getFullYear());
  });

  it('should throw error on non-string parameters', function () {
    expect(function() {
      testFunc(3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('trolololo');
    }).to.throw(Error);
  });
});


var expect = require('chai').expect;

var Drac = require('../');

describe('is date rules', function () {
  var testFunc = Drac.define({
    params: {
      date: { isDate: true }
    }
  }, function(date) { return 'year: ' + new Date(date).getFullYear(); });

  it('should give correct result given date object', function() {
    var result = testFunc(new Date());
    expect(result).to.equal('year: ' + new Date().getFullYear());
  });

  it('should give correct result given milliseconds', function() {
    var result = testFunc(new Date().valueOf());
    expect(result).to.equal('year: ' + new Date().getFullYear());
  });

  it('should give correct result given date string', function() {
    var result = testFunc(new Date().toDateString());
    expect(result).to.equal('year: ' + new Date().getFullYear());
  });

  it('should give correct result given date ISO string', function() {
    var result = testFunc(new Date().toISOString());
    expect(result).to.equal('year: ' + new Date().getFullYear());
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('trolololo');
    }).to.throw(Error);
  });
});

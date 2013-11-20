
var expect = require('chai').expect;

var Drac = require('../');

describe('not empty rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { notEmpty: true }
    }
  }, function(name) { return 'not empty: ' + name; });

  it('should give correct result', function() {
    var result = testFunc('https://github.com/myou');
    expect(result).to.equal('not empty: https://github.com/myou');
  });

  it('should throw error on non-string parameters', function () {
    expect(function() {
      testFunc(3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('');
    }).to.throw(Error);
  });
});

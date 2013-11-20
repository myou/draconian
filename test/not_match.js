
var expect = require('chai').expect;

var Drac = require('../');

describe('not match rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { notMatch: /^abc[0-9]+/ }
    }
  }, function(name) { return 'hello ' + name; });

  it('should give correct result', function() {
    var result = testFunc('bbc1230987');
    expect(result).to.equal('hello bbc1230987');
  });

  it('should throw error on non-string parameters', function () {
    expect(function() {
      testFunc(3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('abc1230987');
    }).to.throw(Error);
  });
});

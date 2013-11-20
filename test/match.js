
var expect = require('chai').expect;

var Drac = require('../');

describe('match rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { match: /^abc[0-9]+/ }
    }
  }, function(name) { return 'hello ' + name; });

  it('should give correct result', function() {
    var result = testFunc('abc1230987');
    expect(result).to.equal('hello abc1230987');
  });

  it('should throw error on non-string parameters', function () {
    expect(function() {
      testFunc(3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('bbc1230987');
    }).to.throw(Error);
  });
});

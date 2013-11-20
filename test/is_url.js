
var expect = require('chai').expect;

var Drac = require('../');

describe('is url rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { isUrl: true }
    }
  }, function(name) { return 'url: ' + name; });

  it('should give correct result', function() {
    var result = testFunc('https://github.com/myou');
    expect(result).to.equal('url: https://github.com/myou');
  });

  it('should throw error on non-string parameters', function () {
    expect(function() {
      testFunc(3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc('abc123@09@87');
    }).to.throw(Error);
  });
});

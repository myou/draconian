
var expect = require('chai').expect;

var Drac = require('../');

describe('is email rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { isEmail: true }
    }
  }, function(name) { return 'email: ' + name; });

  it('should give correct result', function() {
    var result = testFunc('max.you15@gmail.com');
    expect(result).to.equal('email: max.you15@gmail.com');
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


var expect = require('chai').expect;

var Drac = require('../');

describe('is in rules', function() {
  var testFunc = Drac.define({
    params: {
      name: { isIn: ['hello', 3, false] },
    }
  }, function(name) { return 'name: ' + name; });

  it('should give correct result', function() {
    var result = testFunc(false);
    expect(result).to.equal('name: false');
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc();
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc(3, 'hello');
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(4);
    }).to.throw(Error);
  });
});


var expect = require('chai').expect;

var Drac = require('../');

describe('not in rules', function() {
  var testFunc = Drac.define({
    params: {
      name: { notIn: ['hello', 3, false] }
    }
  }, function(name) { return 'name: ' + name; });

  it('should give correct result', function() {
    var result = testFunc(true);
    expect(result).to.equal('name: true');
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
      testFunc(3);
    }).to.throw(Error);
  });
});

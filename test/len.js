
var expect = require('chai').expect;

var Drac = require('../');

describe('len rules', function() {
  var testFunc = Drac.define({
    params: {
      arr: { len: [2, 5] }
    }
  }, function(arr) { return 'length is: ' + arr.length; });

  it('should give correct result', function() {
    var result = testFunc([1, 2, 3]);
    expect(result).to.equal('length is: 3');
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc();
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc([1, 2, 3], 'hello');
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc([1, 2, 3, 4, 5, 6]);
    }).to.throw(Error);
  });
});

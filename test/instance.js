
var expect = require('chai').expect;

var Drac = require('../');

describe('instance rules', function() {
  var testFunc = Drac.define({
    params: {
      arr: { instance: Array },
      index: { type: 'number' }
    }
  }, function(arr, index) { return arr[index]; });

  it('should give correct result', function() {
    var result = testFunc([1, 2], 1);
    expect(result).to.equal(2);
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc([1, 2]);
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc([1, 2], 1, 3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(1, 2);
    }).to.throw(Error);
  });
});

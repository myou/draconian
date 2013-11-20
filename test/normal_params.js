
var expect = require('chai').expect;

var Drac = require('../');

describe('type rules', function() {
  var testFunc = Drac.define({
    params: {
      num1: { type: 'number' },
      num2: { type: 'number' },
      str: { type: 'string' }
    }
  }, function(num1, num2, str) { return num1 + num2 + str; });

  it('should give correct result', function() {
    var result = testFunc(1, 2, 'hi');
    expect(result).to.equal('3hi');
  });

  it('should throw error on missing parameters', function () {
    expect(function() {
      testFunc(1, 2);
    }).to.throw(Error);
  });

  it('should throw error on extra parameters', function () {
    expect(function() {
      testFunc(1, 2, 'hi', 3);
    }).to.throw(Error);
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(1, 2, 3);
    }).to.throw(Error);
  });
});

describe('type rules with optional parameters', function() {
  var testFunc = Drac.define({
    params: {
      num1: {
        type: 'number'
      },
      num2: {
        type: 'number'
      },
      str: {
        type: 'string',
        optional: true
      }
    }
  }, function(num1, num2, str) { return num1 + num2 + str; });

  it('should not throw error on missing optional parameters', function () {
    var result = testFunc(1, 2);
    expect(result).to.be.NaN;
  });
});

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

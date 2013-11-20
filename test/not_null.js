
var expect = require('chai').expect;

var Drac = require('../');

describe('not null rules', function () {
  var testFunc = Drac.define({
    params: {
      name: { notNull: true }
    }
  }, function(name) { return 'not null: ' + name; });

  it('should give correct result', function() {
    var result = testFunc('https://github.com/myou');
    expect(result).to.equal('not null: https://github.com/myou');
  });

  it('should throw error on invalid parameters', function () {
    expect(function() {
      testFunc(null);
    }).to.throw(Error);
  });
});

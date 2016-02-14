
var testReducer = require('./index');
var expect = require('chai').expect;

var goodSample = function(state, action) {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  } else if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  } else {
    return { counter: 0 };
  }
};

var badSample = function(state, action) {
  if (action.type === 'GET_VALUE') {
    return 'someOtherValue';
  }
};

describe('#testReducer', function() {
  var assertReducer;
  beforeEach(function() {
    assertReducer = testReducer(goodSample);
  });

  it('can perform deep equality comparisons', function() {
    expect(function() {
      assertReducer({
        from: { counter: 0 },
        to: { counter: 1 },
        action: { type: 'INCREMENT' },
      });
      assertReducer({
        from: { counter: 1 },
        to: { counter: 0 },
        action: { type: 'DECREMENT' },
      });
    }).to.not.throw(Error);
  });

  it('throws errors for bad reducers', function() {
    badAssertReducer = testReducer(badSample);
    expect(function() {
      badAssertReducer({
        from: '',
        to: 'someValue',
        action: { type: 'GET_VALUE' },
      });
    }).to.throw(Error);
  });

  it('throws an error if `from` is not specified', function() {
    expect(function() {
      assertReducer({
        to: { counter: 1 },
        action: { type: 'INCREMENT' },
      });
    }).to.throw('The `from` option was not specified in the reducer assertion call.');
  });

  it('throws an error if `to` is not specified', function() {
    expect(function() {
      assertReducer({
        from: { counter: 0 },
        action: { type: 'INCREMENT' },
      });
    }).to.throw('The `to` option was not specified in the reducer assertion call.');
  });

  it('throws an error if `action` is not specified', function() {
    expect(function() {
      assertReducer({
        from: { counter: 0 },
        to: { counter: 1 },
      });
    }).to.throw('The `action` option was not specified in the reducer assertion call.');
  });
});

/**
 * Assertion module for redux reducers.
 */

var assert = require('core-assert');

module.exports = function testReducer(reducer) {
  return function assertReducer(options) {
    // Extract variables
    var from = options.from;
    var to = options.to;
    var action = options.action;

    // Perform invariant checks
    if (typeof from === 'undefined') {
      assert(false, 'The `from` was not specified in reducer assertion call.');
    }

    if (typeof to === 'undefined') {
      assert(false, 'The `to` was not specified in reducer assertion call.');
    }

    if (typeof action === 'undefined') {
      assert(false, 'The `action` was not specified in reducer assertion call.');
    }

    // Get the next state
    try {
      var result = reducer(from, action);
    } catch (e) {
      assert(false, 'The reducer threw an exception.');
    }

    // Assert strict equality
    assert.deepStrictEqual(result, to);
  };
};

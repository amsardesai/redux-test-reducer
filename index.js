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
      assert(false, 'The `from` option was not specified in the reducer assertion call.');
    }

    if (typeof to === 'undefined') {
      assert(false, 'The `to` option was not specified in the reducer assertion call.');
    }

    if (typeof action === 'undefined') {
      assert(false, 'The `action` option was not specified in the reducer assertion call.');
    }

    // Get the next state
    var result = reducer(from, action);

    // Assert strict equality
    assert.deepStrictEqual(result, to);
  };
};

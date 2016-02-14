
# redux-test-reducer

**redux-test-reducer** is a simple module that allows you to cleanly test your
[Redux](https://github.com/reactjs/redux) reducers.

## Installation

    $ npm install --save-dev redux-test-reducer

## Usage

This package works with any JavaScript testing framework. Here's an example with
[Mocha](https://mochajs.org/):

```javascript
var testReducer = require('redux-test-reducer');

// Simple counter reducer from the redux docs
var reducer = function(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

// Load the reducer to create an assertion function
var assertReducer = testReducer(reducer);

describe('#reducer', function() {
  it('can increment', function() {
    assertReducer({
      from: 0,
      to: 1,
      action: { type: 'INCREMENT' }
    });
  });

  it('can decrement', function() {
    assertReducer({
      from: 2,
      to: 1,
      action: { type: 'DECREMENT' }
    });
  });
});
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a [new pull request](../../pull/new/master)


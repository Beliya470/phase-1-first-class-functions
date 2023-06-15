// The receivesAFunction function should take a callback function as an argument
// and call the callback function
function receivesAFunction(callback) {
  callback();
}

// The returnsANamedFunction function should take no arguments and return a named function
function returnsANamedFunction() {
  // Named function to be returned
  function namedFunction() {
    console.log("This is a named function.");
  }
  return namedFunction;
}

// The returnsAnAnonymousFunction function should take no arguments and return an anonymous function
function returnsAnAnonymousFunction() {
  // Returning an anonymous function
  return function () {
    console.log("This is an anonymous function.");
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};

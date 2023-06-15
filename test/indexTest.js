const { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction } = require("../index");

// Test receivesAFunction with a simple log function
describe("receivesAFunction(callback)", () => {
  it("should receive a function and call it", () => {
    let message = "";
    receivesAFunction(() => {
      message = "Callback function called!";
    });
    expect(message).to.equal("Callback function called!");
  });
});

// Test returnsANamedFunction
describe("returnsANamedFunction()", () => {
  it("should return a named function", () => {
    const namedFunction = returnsANamedFunction();
    expect(namedFunction).to.be.a("function");
  });
});

// Test returnsAnAnonymousFunction
describe("returnsAnAnonymousFunction()", () => {
  it("should return an anonymous function", () => {
    const anonymousFunction = returnsAnAnonymousFunction();
    expect(anonymousFunction).to.be.a("function");
  });
});

var assert, bar;
assert = require("assert");
bar = require("./barService");
describe("bar service", function() {
  it("Should get baz", function() {
    var greeting = bar("foo");
    assert.equal(greeting, "baz");
  });
});

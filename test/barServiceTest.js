var assert, sut;
assert = require("assert");
sut = require("./barService");
describe("Foo service", function() {
  it("Should get baz", function() {
    var greeting = sut("foo");
    assert.equal(greeting, "baz");
  });
});

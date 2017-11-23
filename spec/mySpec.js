describe("Foo service", function() {
  var service;

  beforeEach(function() {
    service = angular.module().getInternalDef();
  });

  it("Should get baz", function() {
    var greeting = service("foo");
    expect(greeting).toBe("baz");
  });
});

(function () {
    angular.module("myApp").service("bar", function (name) {
        if (name === "foo") return "baz";
        return "";
    });
})();
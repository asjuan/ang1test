var angular, sut;
angular = require("./angularfake");
sut = function (arg) {
    // copy to your service from here
    angular.module("myApp").service("bar", function () {
        return function (name) {
            if (name === "foo") return "baz";
            return "";
        };
    });
    // to this point
    return angular.module("myApp").getdeclaredService(arg);
};
module.exports = sut;
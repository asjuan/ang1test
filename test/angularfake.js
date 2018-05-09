
var angular, internal
angular = {
    module: function () {
        return {
            service: function (serviceName, f) {
                internal = f();
            },
            getdeclaredService: function (a) {
                return internal(a);
            } 
        }
    }

};
module.exports = angular;
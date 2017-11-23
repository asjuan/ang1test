var angular;
(function () {
    var internalDef;
    angular = {
        module: function () {
            return {
                service: function (serviceName, f) {
                    internalDef = f;
                },
                getInternalDef: function () {
                    return internalDef;
                }
            }
        }

    };
})();
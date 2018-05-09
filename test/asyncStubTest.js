var assert, fs, $http;
assert = require("assert");
fs = require("fs");
$http = require("./fakehttp");
describe("async calls", function () {
    it("stubs an async call", function (done) {
        $http({
            method: "GET",
            url: "somewhere.com/api/movies",
            params: 2
        }).then(function (response) {
            if (response.data) {
                done();
            }
        })
    });
    it("really uses a file!", function () {
        var movies = JSON.parse(fs.readFileSync("./test/jsons/movies.json", "utf8"));
        assert.equal(movies.length, 2);
    });
});
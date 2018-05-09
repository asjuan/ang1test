var assert, fs;
assert = require("assert");
fs = require("fs");
describe("Jsons", function () {
    it("Should read movies", function () {
        var movies = JSON.parse(fs.readFileSync("./test/jsons/movies.json", "utf8"));
        assert.equal(movies.length, 2);
    });
});

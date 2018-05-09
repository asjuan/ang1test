var fs, fakehttp;
fs = require("fs");
fakehttp = function (request) {
    var data, movies;
    movies =  JSON.parse(fs.readFileSync("./test/jsons/movies.json", "utf8"));
    data  = {"data": movies};
    return {
        then: function (f) {
            f(data);
        } 
    }    
};
module.exports = fakehttp;
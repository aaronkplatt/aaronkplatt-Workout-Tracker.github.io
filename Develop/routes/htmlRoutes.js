const path = require("path");

module.exports = function (app) {
    app.get("/exercise", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/views/exercise.html"));
    });

    app.get("/stats", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/views/stats.html"));
    });
}

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // imported the assets
app.use(express.static("public/views")); // imports the views which are the html files.

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

//atlas
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
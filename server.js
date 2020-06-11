const express = require("express");
// Request logger middleware for node.js
const morgan = require("morgan");
// Mongoose uses Schemas to map to MongoDB Collection
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");
app.use(morgan("dev"));
// Method in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// To serve static files in express apps
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Establish Server Connection
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

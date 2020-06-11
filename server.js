const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

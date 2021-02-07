const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const Exercise = require("./models/exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initial root route
app.use(express.static("public"));

//you may have to change the db name base on how you name it
mongoose.connect(
  "mongodb+srv://gilorcilla:test@cluster0.iisf.mongodb.net/test",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

db.on("error", (error) => console.error(error));

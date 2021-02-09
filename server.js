const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");
//const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
//const Exercise = require("./models/exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//you may have to change the db name base on how you name it
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//db.on("error", (error) => console.error(error));
//db.once("open", () => console.log("connection success"));
//initial root route
app.use(express.static("public"));

app.use(htmlRouter);
app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

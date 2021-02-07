const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;

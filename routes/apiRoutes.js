const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");

router.get("/api/workouts", (req, res) => {
  console.log("Get route");
  Exercise.find({})
    .then((data) => {
      console.log("data", data);
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  Exercise.create({})
    .then((data) => {
      console.log("Create route", data);
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  Exercise.find({})
    .limit(7)
    .then((data) => {
      console.log("PUT", data);
      res.json(data);
    })
    .catch((err) => res.json(err));
});

// router.post("/api/workouts/range", (req, res) => {
//   Exercise.create({})
//     .then((data) => {
//       console.log("PUT", data);
//       res.json(data);
//     })
//     .catch((err) => res.json(err));
// });

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("PUT Route");
  Exercise.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => {
      console.log("PUT Routes", data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

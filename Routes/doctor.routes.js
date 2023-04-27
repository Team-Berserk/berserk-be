const express = require("express");
const {
  getDoctor,
  postDoctor,
  getDoctors,
} = require("../Controllers/doctor.controller");

const router = express.Router();

router
  .get("/doctors", getDoctors)
  .get("/doctor/:id", getDoctor)
  .post("/doctor", postDoctor);

module.exports.doctorRoutes = router;

const express = require("express");
const {
  getDoctor,
  postDoctor,
  getDoctors,
  deleteDoctor,
  addImage,
} = require("../Controllers/doctor.controller");

const router = express.Router();

router
  .get("/doctors", getDoctors)
  .get("/doctor/:id", getDoctor)
  .post("/doctor", postDoctor)
  .post("/doctor/:id", addImage)
  .delete("/doctor/:id", deleteDoctor);

module.exports.doctorRoutes = router;

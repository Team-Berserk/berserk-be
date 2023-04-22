const express = require("express");
const {
  createRequest,
  getRequests,
  deleteRequest,
  getRequest,
  availableTimes,
} = require("../Controllers/request.controller");

const router = express.Router();

router
  .get("/requests", getRequests)
  .get("/request/:id", getRequest)
  .post("/request", createRequest)
  .put("/availableTimes", availableTimes)
  .delete("/request/:id", deleteRequest);

module.exports.requestRoutes = router;

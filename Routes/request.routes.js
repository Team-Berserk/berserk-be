const express = require("express");
const {
  createRequest,
  getRequests,
  deleteRequest,
  getRequest,
} = require("../Controllers/request.controller");

const router = express.Router();

router
  .get("/requests", getRequests)
  .get("/request/:id", getRequest)
  .post("/request", createRequest)
  .delete("/request/:id", deleteRequest);

module.exports.requestRoutes = router;

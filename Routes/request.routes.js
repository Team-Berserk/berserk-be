const express = require("express");
const {
  createRequest,
  getRequests,
  deleteRequest,
  getRequest,
  availableTimes,
} = require("../Controllers/request.controller");
const { isAdmin } = require("../config/Middlewares/auth.middlewares");

const router = express.Router();

router
  .get("/requests", isAdmin, getRequests)
  .get("/request/:id", getRequest)
  .post("/request", createRequest)
  .put("/availableTimes", availableTimes)
  .delete("/request/:id", deleteRequest);

module.exports.requestRoutes = router;

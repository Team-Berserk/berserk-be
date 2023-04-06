const express = require("express");
const {
  loginUser,
  signupUser,
  VerifyToken,
} = require("../Controllers/auth.controller");
const {
  addUserPost,
  getUsers,
  getUser,
} = require("../Controllers/user.controller");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .get("/verify", VerifyToken)
  .post("/signup", signupUser)
  .post("/login", loginUser)
  .put("/user", addUserPost);

module.exports.userRoutes = router;

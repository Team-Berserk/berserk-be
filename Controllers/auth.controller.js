const { User } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signupUser = async (req, res) => {
  const { username, password } = req.body;
  const checkUsername = await User.findOne({ username });
  try {
    if (checkUsername)
      return res.status(401).send("Username is already in use");
    if (!username || !password)
      return res.status(401).send("Username & Password required!");

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      username,
      password: encryptedPassword,
    }).save();
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.send(token);
  } catch (err) {
    res.status(403);
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).send("No account found");

  try {
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) return res.status(403).send("username or password wrong");
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.send(token);
  } catch (err) {
    res.status(403);
  }
};

exports.VerifyToken = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.send("Token Required");
  try {
    jwt.verify(token, process.env.JWT_SECRET, async (error, item) => {
      if (error) return res.send("Expired");
      const user = await User.findById(item.user._id).populate("requests");
      res.send(user);
    });
  } catch (error) {
    res.status(401);
  }
};

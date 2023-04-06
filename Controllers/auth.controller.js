const { User } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signupUser = async (req, res) => {
  const { username, password, role } = req.body;
  const checkUsername = await User.findOne({ username });
  if (!checkUsername) {
    if (username && password) {
      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await new User({
          username,
          password: encryptedPassword,
          role,
        }).save();
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
        res.send(token);
      } catch (err) {
        res.status(403);
      }
    }
  } else {
    res.status(401).send("Username is already in use");
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    console.log(`Entered accounts user : ${user}`);
    try {
      const isEqual = await bcrypt.compare(password, user.password);
      if (isEqual) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
        res.send(token);
      } else {
        res.status(401).send("username or password wrong");
      }
    } catch (err) {
      res.status(403);
    }
  } else {
    res.status(404).send("No account found");
  }
};

exports.VerifyToken = async (req, res) => {
  if (req.headers.authorization) {
    try {
      await jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET,
        (error, item) => {
          if (!error) {
            res.send(item.user);
          }
        }
      );
    } catch (error) {
      res.status(401);
    }
  } else {
    res.status(404).send("Authentication required");
  }
};

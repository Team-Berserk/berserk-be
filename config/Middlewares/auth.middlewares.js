const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(404).send({ message: "Token required!" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = decoded.user;

    if (!user) {
      throw new Error();
    }

    if (!user.role.includes("admin")) {
      throw new Error("You are not authorized to perform this action");
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(402).send({ error: "Please authenticate." });
  }
};

module.exports = { isAdmin, isLoggedIn };

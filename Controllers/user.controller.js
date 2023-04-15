const { User } = require("../Models/user.model");

exports.getUsers = async (req, res) => {
  try {
    const product = await User.find({}).populate("requests");
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const product = await User.findById(req.params.id).populate("requests");
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

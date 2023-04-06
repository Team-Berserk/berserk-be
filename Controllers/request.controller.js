const { Request } = require("../Models/request.model");

exports.getRequests = async (req, res) => {
  try {
    const products = await Request.find({}).populate("Author");
    res.send(products);
  } catch (err) {
    res.send(er);
  }
};

exports.getRequest = async (req, res) => {
  try {
    const products = await Request.findById(req.params.id).populate("Author");
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

exports.createRequest = async (req, res) => {
  const { Date, Hour, Dentist, Author } = req.body;

  try {
    const product = await new Request({ Date, Hour, Dentist, Author }).save();
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    const result = await Request.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

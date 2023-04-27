const { Doctor } = require("../Models/doctor.model");

exports.getDoctors = async (_req, res) => {
  try {
    const result = await Doctor.find({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const result = await Doctor.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.postDoctor = async (req, res) => {
  const { Name, About, Skills } = req.body;
  try {
    const result = await new Doctor({
      Name,
      About,
      Skills,
    }).save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

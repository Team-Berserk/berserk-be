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
  const { Name, About, Img, Skills } = req.body;
  try {
    const result = await new Doctor({
      Name,
      About,
      Img,
      Skills,
    }).save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.addImage = async (req, res) => {
  try {
    const { imgUrl } = req.body;
    const result = await Doctor.findById(req.params.id);
    result.Img = imgUrl;
    result.save();
    res.send(result);
  } catch (error) {
    res.send("error");
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const result = await Doctor.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
  Name: {
    type: String,
  },
  About: {
    type: String,
  },
  Skills: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Doctor = model("doctors", doctorSchema);

module.exports.Doctor = Doctor;

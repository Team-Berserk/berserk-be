const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
  Date: {
    type: String,
    required: true,
  },
  Hour: {
    type: String,
    required: true,
  },
  Dentist: {
    type: String,
    required: true,
  },
  Author: 
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Request = model("requests", requestSchema);

module.exports.Request = Request;

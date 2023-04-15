const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: "requests",
    },
  ],
  role: {
    type: Array,
    default: ["user"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("users", userSchema);

module.exports.User = User;

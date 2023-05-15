const { Schema, model } = require('mongoose')

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
    type: Schema.Types.ObjectId,
    ref: 'doctors',
  },

  Surename: {
    type: String,
    required: true,
  },

  Ownername: {
    type: String,
    required: true,
  },

  Phonenumber: {
    type: String,
    required: true,
  },

  TimeId: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  Attendance: {
    type: Boolean,
    default: null,
  },
})

const Request = model('requests', requestSchema)

module.exports.Request = Request

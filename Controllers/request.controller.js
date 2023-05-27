const { Doctor } = require("../Models/doctor.model");
const { Request } = require("../Models/request.model");

exports.getRequests = async (req, res) => {
  // const { doctorId } = req.params

  try {
    const appointments = await Request.find({});
    res.send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getRequest = async (req, res) => {
  try {
    const products = await Request.findById(req.params.id).populate(" Dentist");
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

exports.createRequest = async (req, res) => {
  const { Date, Hour, Surename, Dentist, Ownername, Phonenumber } = req.body;

  try {
    const DoctorId = await Doctor.findById(Dentist);
    const TimeId = `${Dentist}/${Date}/${Hour}`;
    const isTaken = await Request.findOne({ TimeId });
    if (isTaken) return res.send({ message: "177013" });
    const product = await new Request({
      Date,
      Hour,
      Dentist: DoctorId,
      TimeId,
      Ownername,
      Surename,
      Phonenumber,
    }).save();
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
exports.availableTimes = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { Date } = req.body;
    const allTimes = [];
    const takenTimes = await Request.find({ Date, Dentist: doctorId });
    takenTimes.forEach((itm) => {
      allTimes.push(itm.Hour);
    });
    res.send(allTimes);
  } catch (err) {
    res.send(err);
  }
};
exports.manageByDates = async (req, res) => {
  const { doctorId } = req.params;

  const placeholder = {};
  placeholder["10:00"] = {
    name: null,
  };
  placeholder["11:00"] = {
    name: null,
  };
  placeholder["12:00"] = {
    name: null,
  };
  placeholder["13:00"] = {
    name: null,
  };
  placeholder["15:00"] = {
    name: null,
  };
  placeholder["16:00"] = {
    name: null,
  };
  placeholder["17:00"] = {
    name: null,
  };
  placeholder["18:00"] = {
    name: null,
  };

  try {
    const Date = req.body.date;
    const allTimes = await Request.find({ Date, Dentist: doctorId });
    allTimes.forEach((itm) => {
      placeholder[itm.Hour] = itm;
    });
    res.send({ placeholder });
  } catch (err) {
    res.send("Aldaa garlaa");
  }
};

exports.setAttendance = async (req, res) => {
  try {
    const { requestId, status } = req.body;
    const request = await Request.findById(requestId);
    request.Attendance = status;
    await request.save();
    res.send(request);
  } catch (error) {}
};

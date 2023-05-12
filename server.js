require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { userRoutes } = require("./Routes/user.routes");
const { requestRoutes } = require("./Routes/request.routes");
const { doctorRoutes } = require("./Routes/doctor.routes");

const port = process.env.PORT || 7070;

const app = express();

connect();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(requestRoutes);
app.use(doctorRoutes);

app.get("/", (_req, res) => {
  res.send("H3ll0 aDm1n!");
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Listening on port ${port} 🚀🚀🚀`);
});

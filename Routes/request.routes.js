const express = require('express')
const {
  createRequest,
  getRequests,
  deleteRequest,
  getRequest,
  availableTimes,
  manageByDates,
  setAttendance,
} = require('../Controllers/request.controller')
const { isAdmin } = require('../config/Middlewares/auth.middlewares')

const router = express.Router()

router
  .get('/requests', isAdmin, getRequests)
  .get('/request/:id', getRequest)
  .post('/request', createRequest)
  .put('/attendance', setAttendance)
  .put('/manage/:doctorId', manageByDates)
  .put('/availableTimes/:doctorId', availableTimes)
  .delete('/request/:id', deleteRequest)

module.exports.requestRoutes = router

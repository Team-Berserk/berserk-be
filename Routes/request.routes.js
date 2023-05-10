const express = require('express')
const {
  createRequest,
  getRequests,
  deleteRequest,
  getRequest,
  availableTimes,
  manageByDates,
} = require('../Controllers/request.controller')
const { isAdmin } = require('../config/Middlewares/auth.middlewares')

const router = express.Router()

router
  .get('/requests', isAdmin, getRequests)
  .get('/request/:id', getRequest)
  .put('/manage', manageByDates)
  .post('/request', createRequest)
  .put('/availableTimes', availableTimes)
  .delete('/request/:id', deleteRequest)

module.exports.requestRoutes = router

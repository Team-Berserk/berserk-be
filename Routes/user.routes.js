const express = require('express')
const {
  loginUser,
  signupUser,
  VerifyToken,
} = require('../Controllers/auth.controller')
const { getUsers, getUser } = require('../Controllers/user.controller')
const { isAdmin } = require('../config/Middlewares/auth.middlewares')

const router = express.Router()

router
  .get('/verify', VerifyToken)
  .post('/signup', signupUser)
  .post('/login', loginUser)
  .get('/users', isAdmin, getUsers)
  .get('/user/:id', isAdmin, getUser)

module.exports.userRoutes = router

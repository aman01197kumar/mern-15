const { signup } = require('../controllers/users.controller.js')
const { authMiddleware } = require('../middlewares/authMiddleware.js')

const express = require('express')

const router = express.Router()

// router.get('/users',authMiddleware,userController)
router.post('/signup',signup)

module.exports = {router}
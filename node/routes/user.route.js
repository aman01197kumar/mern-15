const { signup, login, content } = require('../controllers/users.controller.js')
const { authMiddleware } = require('../middlewares/authMiddleware.js')

const express = require('express')

const router = express.Router()

// router.get('/users',authMiddleware,userController)
router.post('/signup', signup)
router.post('/login', login)
router.get('/validate', content)

module.exports = { router }
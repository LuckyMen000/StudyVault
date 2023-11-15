const express = require('express')
const authController = require('../controllers/authController')
const bcrypt = require('bcrypt');
const router = express.Router();
const prisma = require('../db/prisma')

router.use('/auth',authController)

router.post('/register', authController.register)
router.post('/login',authController.login)

module.exports = router
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/User');
const { secretKey } = require('../config/config');

const router = express.Router();

router.post('/register', async (req, res) => {
    // Регистрация нового пользователя
    // Обработка ошибок и отправка ответа
});

router.post('/login', async (req, res) => {
    // Авторизация пользователя и создание JWT-токена
    // Обработка ошибок и отправка ответа
});

module.exports = router;
const express = require('express');
const app = express();
const authRoutes = require('./src/routes/authRoutes');

app.use('/api', authRoutes);

// Добавьте middleware для проверки JWT-токена здесь

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
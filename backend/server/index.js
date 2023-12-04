require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const errorMidleware = require('./middlewares/eror-middleware')

const PORT = process.env.PORT || 5000
const app = express()


const router = require('./router/index')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(express.static('public'));
app.use(errorMidleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
        app.listen(PORT,() => console.log(`Server started on Port = ${PORT}`))
    } catch (e) {
        console.error("Connection to database failed:", e.message);
    }
};

start()
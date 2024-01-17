const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    subject:String,
    description:String,
    deadline:Date
})

const Homework = mongoose.model('Homework',homeworkSchema)

module.exports = Homework
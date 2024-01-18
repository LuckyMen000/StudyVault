const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    subject:String,
    description:String,
    deadline:Date
})

const HomeworkModels = mongoose.model('HomeworkModels',homeworkSchema)

module.exports = HomeworkModels
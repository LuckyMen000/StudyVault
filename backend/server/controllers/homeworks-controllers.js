const Hometask = require("../models/homework-models");
class HomeworksControllers{
    async getTasks(req,res){
        try {
            res.json(hometasks)
        }catch (error){
            res.status(500).json({ error:error.message })
        }
    }
    async createTasks(req,res){
        const newHomework = new Hometask(req.body)
        try {
            const savedHomework = await newHomework.save()
            res.json(savedHomework)
        } catch (error){
            res.status(400).json({error:error.message})
        }
    }
}

module.exports = new HomeworksControllers()
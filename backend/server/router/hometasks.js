const express = require('express')
const router = express.Router()
const Hometask = require('../models/homework')
const {json} = require("express");

router.get('/', async (req,res)=>{
    try {
        const hometasks = await Hometask.find();
        res.json(hometasks)
    }catch (error){
        res.status(500).json({ error:error.message })
    }
})
router.post('/',async (req,res)=>{
    const newHomework = new Hometask(req.body)
    try {
        const savedHomework = await newHomework.save()
        res.json(savedHomework)
    } catch (error){
        res.status(400).json({error:error.message})
    }
})

module.exports = router;
const Router = require('express').Router
const express = require('express')
const router = new Router()
const homeworks = require('../controllers/homeworks-controllers')
const {json} = require("express");


router.get('/',homeworks.getTasks)
router.post('/',homeworks.createTasks)

module.exports = router;
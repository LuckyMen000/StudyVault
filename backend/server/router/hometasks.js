const Router = require('express').Router
const router = new Router()
const homeworks = require('../controllers/homeworks-controllers')


router.get('/',homeworks.getTasks)
router.post('/',homeworks.createTasks)

module.exports = router;
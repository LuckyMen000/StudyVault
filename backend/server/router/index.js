const Router = require('express').Router
const userController = require('../controllers/user-controllers')
const router = new Router()
const {body} = require('express-validator')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({
        min:3,
        max:32
    }),
    userController.registration
)
router.post('/login',userController.login)
router.post('/logout',userController.logout)
router.get('/activate/:link',userController.activate)
router.get('/refresh',userController.refresh)
router.get('/users',userController.getUser)

module.exports = router

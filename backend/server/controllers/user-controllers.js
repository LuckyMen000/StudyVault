const userServise = require('../servise/user-service')
const ApiError = require('../exceptions/api-error')
const {validationResult} = require('express-validator')

class UserControllers{
    async registration(req,res,next){
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации',errors.array()))
            }
            const {email, password} = req.body
            const userData = await userServise.registration(email,password)
            res.cookie('refreshToken',userData.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000,httpOnly:true})
            return res.json(userData)
        }catch (e) {
           next(e)
        }
    }

    async login(req,res,next){
        try {
            const {email,password} = req.body
            const userData = await userServise.login(email, password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000,httpOnly:true})
            return res.json(userData)
        }catch (e) {
            next(e)
        }
    }

    async logout(req,res,next){
        try {
            const {refreshToken} = req.cookies
            const token = await userServise.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token);
        }catch (e) {
            next(e)
        }
    }

    async activate(req,res,next){
        try {
            const activationink = req.params.link
            await userServise.activate(activationink)
            return res.redirect(process.env.CLIENT_URL)
        }catch (e) {
            next(e)
        }
    }

    async refresh(req,res,next){
        try {

        }catch (e) {
            next(e)
        }
    }

    async getUser(req,res,next){
        try {
            res.json(['123' ,'2456'])
        }catch (e) {
           next(e)
        }
    }
}

module.exports = new UserControllers()

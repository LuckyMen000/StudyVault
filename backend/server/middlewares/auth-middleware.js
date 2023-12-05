const ApiError = require('../exceptions/api-error')
const tokenServise = require('../servise/token-service')

module.exports = function (req,res,next){
    try {
        const authorizatonHeader = req.headers.authorization
        if (!authorizatonHeader){
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authorizatonHeader.split(' ')[1]
        if (!accessToken){
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenServise.validateAccessToken(accessToken)
        if (!userData){
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData
        next()
    }catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}
const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-models')
class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{expiresIn:'30m'})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{expiresIn:'30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId,refreshToken){
        const tokenData = await tokenModel.findOne({user:userId})
        if (tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        return await tokenModel.create({user: userId, refreshToken});
    }
    async removeToken(refreshToken) {
        return tokenModel.deleteOne({refreshToken});
    }
}

module.exports = new TokenService()
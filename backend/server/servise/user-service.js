const UserModel = require('../models/user-models')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid') // Используем правильное имя функции из пакета uuid
const emailService = require('./email.service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с таким ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4() // Вызываем функцию uuidv4() для создания активационной ссылки
        const user = await UserModel.create({ email, password: hashPassword, activationLink })
        await emailService.sendActivationEmail(email, `${process.env.API_URL}/api/activate/${activationLink}`) // Исправляем опечатку в ссылке

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto }) // Исправляем передачу данных для генерации токенов
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink })
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email,password){
        const user = await UserModel.findOne({email})
        if (!user){
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password,user.password)
        if (isPassEquals){
            throw ApiError.BadRequest('Неправильный пароль')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }
    async logout(refreshToken) {
        try {
            return await tokenService.removeToken(refreshToken)
        } catch (error) {
            throw ApiError.BadRequest('Ошибка при выходе из системы');
        }
    }

    async refresh(refreshToken){
        if (!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async getAllUsers(){
        return UserModel.find();
    }
}

module.exports = new UserService()

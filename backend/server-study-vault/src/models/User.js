const { Prisma } = require('@prisma/client')

const prisma = require('../db/prisma')

async function createUser(data){
    return prisma.user.create
}

async function findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
}


module.exports = {
    createUser,
    findUserByEmail,
}
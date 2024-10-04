import prisma from '../prisma/index.js'
import {cookieToken} from '../utils/cookieToken.js'

const signup = async(req, res, next) => {
    try {
        const {name, email, password} =  req.body
        //check
        if (!name || !email || !password) {
            throw new Error('please provide all fields')
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
            }
        })

        //send user a token
        cookieToken(user, res)

    } catch (error) {
        throw new Error(error)
    }
}

export {signup}
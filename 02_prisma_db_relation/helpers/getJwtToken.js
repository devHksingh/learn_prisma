import jwt from 'jsonwebtoken'

const getJwtToken = (userId)=>{
    return jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn: '12h'})
}

export default getJwtToken;
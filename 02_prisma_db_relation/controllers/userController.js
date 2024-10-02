import prisma from "../prisma/index.js"
import cookieToken from "../utils/cookieToken.js"
import bcrypt from 'bcryptjs' // For password hashing

// user signUp
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        // Check user data
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please provide all fields' })
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create a user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword, // Store hashed password
            },
            select: {
                id: true,  // Include user id for token generation
                name: true,
                email: true,
            },
        })

        // Send user a token
        cookieToken(user, res)

    } catch (error) {
        return res.status(500).json({ error: error.message }) // Send error response to the client
    }
};

export { signup }

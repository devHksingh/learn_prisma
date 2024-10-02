import express from 'express'
import { signup } from '../controllers/userController.js'

const router = express.Router()

// POST request for user signup
router.route('/signup').post(signup)

export default router

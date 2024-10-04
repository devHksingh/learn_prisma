import express from "express"
// import { createUser } from "./userController";
import { createUser } from "./userController";


const userRouter = express.Router()

// user route

userRouter.post('/register', createUser);


export default userRouter
import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/config";
import { ApiError } from "./utils/ApiError";
import cookieParser from "cookie-parser";
import userRouter from "./user/userRouter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express()

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ messgae: 'Welcome to todo sever' })
})

// user router

app.use('/api/users', userRouter)

//  Global error handler
app.use(errorHandler)

export { app }
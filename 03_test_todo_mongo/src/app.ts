import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/config";
import { ApiError } from "./utils/ApiError";
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ messgae: 'Welcome to todo sever' })
})

export { app }
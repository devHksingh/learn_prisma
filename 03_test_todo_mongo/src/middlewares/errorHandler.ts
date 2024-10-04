import {Request, Response, NextFunction} from 'express'
import { ApiError } from '../utils/ApiError'

export const errorHandler =(err:ApiError,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.stack);

    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
        success:false,
        message,
        errors: err.errors || []
    })
    
}
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import prisma from "../../prisma";
import { ApiResponse } from "../utils/ApiResponse";
import { UserProp } from "./userTpye";



// const createUser = async (req:Request,res:Response,next:NextFunction)=>{
//     console.log("create user data ",req.body);

//     const {email,userName,firstName,lastName,password} = req.body

//     // check  user data 

//     if(!email || !userName || !firstName || !lastName || !password){
//         return next(new ApiError(400,"All fields are required!"))
//     }

//     // if(
//     //     [email,firstName,lastName,userName,password].some((field)=> field?.trim()==="")
//     // ){
//     //     throw new ApiError(400,"All fields are required!")
//     // }

//     try {
//         const existedUser = await prisma.user.findUnique({
//             where:{
//                 email
//             },
//             select:{
//                 email:true,
//                 userName:true,
//             }
//         })
    
//         if(existedUser){
//             return next( new ApiError(409,"User with email or userName already exists"))
//         }
//     } catch (error) {
//         return next(new ApiError(500,"Error while getting user")) 
//     }
//     // add user on DB
    
//     let newUser
//     try {
//         newUser = await prisma.user.create({
//             data:{
//                 userName,
//                 email,
//                 firstName,
//                 lastName,
//                 password

//             },
//             select:{
//                 userName,
//                 email,
//                 firstName
//             }
//         })
//         if(newUser){
//             console.log("New user ",newUser);
//         return res
//             .status(201)
//             // .json(new ApiResponse(200, newUser, "User register successfully"));
//             .json({data:newUser ,message:"User register successfully"})
//         }
//     } catch (error) {
//         return next(new ApiError(500,"Something went wrong while registering the user"))
//     } 
    

// }

const createUser = async (req:Request,res:Response,next:NextFunction)=>{
    
    console.log("Request data ",req.body);
    const {email,userName,firstName,lastName,password} = req.body

    // if(!email || !userName || !firstName || !lastName || !password){
    //     return next(new ApiError(400,"All fields are required!"))
    // }

    try {
        const existedUser = await prisma.user.findUnique({
            where:{
                email
            },
            select:{
                email:true,
                userName:true,
            }
        })
            
        if(existedUser){
            return next( new ApiError(409,"User with email or userName already exists"))
        }
    } catch (error) {
        return next(new ApiError(500,"Error while getting user")) 
    }

    let newUser

    try {
        newUser = await prisma.user.create({
            data:{
                userName,
                email,
                firstName,
                lastName,
                password,
                refreshToken:"adasd",
                countOfRefreshToken:1

            },
            select:{
                userName,
                email,
                firstName
            }
        })
    } catch (error) {
        return next(new ApiError(500,"Error while creating user"))
    }

    
    res.status(201).json({
        data:newUser,
        success:true,
        message:"User is created"
    })
    
    
}

export {
    createUser
}
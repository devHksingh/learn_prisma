import jwt from "jsonwebtoken";
import prisma from "../prisma/index";

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookie.token;
    if (!token) {
      res.send("Login Requried");
      throw new Error("You are not logged in");
    }

    const decodeToken = jwt.verify(token,process.env.JWT_SECRET)

    req.user= await prisma.user.findUnique({
        where:{
            id: decodeToken.userId
        }
    })
    next()
  } catch (error) {
    throw new Error(error);
  }
};

import prisma from "../prisma/index.js";
import { cookieToken } from "../utils/cookieToken.js";

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //check
    if (!name || !email || !password) {
      throw new Error("please provide all fields");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    //send user a token
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      throw new Error("Please provide email and password");
    }
    // find user
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (password !== user.password) {
      throw new Error("Password not correct");
    }

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
// const userDetails = async (req, res, next) => {
//   try {
//     console.log("REQ :", req);

//     console.log("req.params", req.params);

//     const { email } = req.params.email;
//     console.log("email", email);

//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//       select: {
//         email: true,

//         post: true,
//         name: true,
//       },
//     });
//     console.log(user);

//     res.status(200).json({ data: user });
//   } catch (error) {
//     throw new Error("Unable to find user.Try it again! userDetails", error);
//   }
// };

const getAllusers = async (req, res, next) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
        posts: true,
      },
    });
    console.log("all user details", allUsers);
    res.status(200).json({ allUsers });
  } catch (error) {
    throw new Error("Unable to find user.Try it again!", error);
  }
};

export { signup, login, logout, getAllusers };

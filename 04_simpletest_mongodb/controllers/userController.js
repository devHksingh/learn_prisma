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
    console.log(error);
    
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
const userDetails = async (req, res, next) => {
  try {
    // Log the request and params
    // console.log("REQ :", req);
    console.log("req.params", req.params);

    // Get the email from req.params
    const userEmail = req.params.email; // No need to access 'email' from userEmail, it's already the email
    console.log("userEmail", userEmail);

    // Query the user based on email
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,  // Use the email directly from req.params
      },
      select: {
        email: true,
        name:true
        
      },
    });

    // If user is found, send response
    console.log(user);
    res.status(200).json({ data: user });

  } catch (error) {
    console.error(error);
    // Return error in case of failure
    res.status(500).send(error);
  }
};

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

export { signup, login, logout, getAllusers, userDetails };

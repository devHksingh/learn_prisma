import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hi from test prisma live");
});

app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hi from test prisma live");
});

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

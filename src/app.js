import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    limit:"16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

app.get("/health", (req, res) => {
  console.log("Health Check");
  return res.status(200).json({
    health: "Good",
  });
});

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };

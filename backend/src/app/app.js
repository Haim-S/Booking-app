import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoute from "../routes/auth.routes.js";
const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
export default app;
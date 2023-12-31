import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoute from "../routes/auth.routes.js";
import hotelsRoute from "../routes/hotels.routes.js";
import roomsRoute from "../routes/rooms.routes.js";
import usersRoute from "../routes/users.routes.js";
const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

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
import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import servicesTokens from "../services/jwt.service.js"
import {tryCatchError} from "../utils/error.js";
const router = express.Router();

router.get("/checkauthentication", servicesTokens.verifyAccessToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", servicesTokens.verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", servicesTokens.verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id",servicesTokens.verifyUser, tryCatchError(updateUser));

//DELETE
router.delete("/:id", servicesTokens.verifyUser, tryCatchError(deleteUser));

//GET
router.get("/:id", servicesTokens.verifyUser, tryCatchError(getUser));

//GET ALL
router.get("/", servicesTokens.verifyAdmin, tryCatchError(getUsers));

export default router;
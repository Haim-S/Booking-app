import {Router} from "express";
const router = Router();
import {tryCatchError} from "../utils/error.js";
import {login, register} from "../controllers/auth.controller.js";


router.post("/register", tryCatchError(register));
router.post("/login", tryCatchError(login));

export default router
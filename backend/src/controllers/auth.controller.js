import User from "../models/User.js";
// import {hashSync, compare} from "bcryptjs";
import pkg from 'bcryptjs';
const {hashSync, compare} = pkg;
import {createError} from "../utils/error.js";
import {servicesTokens} from "../services/jwt.service.js";

export const register = async (req, res, next) => {
    const hashPassword = hashSync(req.body.password, 10);
    const newUser = new User({
        ...req.body,
        password: hashPassword,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
}

export const login = async (req, res, next)=> {
    const user = await User.findOne({username: req.body.username});
    if(!user) return next(createError(404, "User not found!"));
    const isPasswordCorrect = await compare(req.body.password, user.password);
    if(!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));
    const token = servicesTokens.createAccessToken(user._id, user.isAdmin);
    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
}



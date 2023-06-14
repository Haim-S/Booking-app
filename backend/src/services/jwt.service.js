import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

const jwtConfig = {
    ac_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
    rf_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    ac_expired_millisecond: process.env.JWT_ACCESS_TOKEN_EXPIRED_MILLISECONDS
}

const createAccessToken = (userId, isAdmin) => {
    try {
        const token = jwt.sign(
            {id: userId, isAdmin: isAdmin}, process.env.JWT_ACCESS_TOKEN_SECRET,{
                expiresIn: '30m'
            }
        )
        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createRefreshToken = (userId, isAdmin) => {
    
    try {
        const token = jwt.sign(
            {id: userId, isAdmin: isAdmin},
            jwtConfig.rf_secret, {
                expiresIn: new Date(jwtConfig.ac_expired_millisecond).getTime(),
            }
        )
        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// const verifyAccessToken = (token) => {
//     try {
//         const decoded = jwt.verify(token, jwtConfig.ac_secret);
//         return decoded;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

const verifyAccessToken = (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token){
            return next(createError(401, "You are not authenticated!"))
        }
jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user)=>{
    if(err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next()
});
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const verifyUser = (req, res, next)=> {
    verifyAccessToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"));
        }
    })
    try {
        
    } catch (error) {
        
    }
}

const verifyAdmin = (req, res, next)=> {
    verifyAccessToken(req, res, ()=>{
        // console.log(req.user);
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"));
        }
    })
    try {
        
    } catch (error) {
        
    }
}

const servicesTokens = {
    createAccessToken,
    createRefreshToken,
    verifyAccessToken,
    verifyUser,
    verifyAdmin,
};

export default servicesTokens;


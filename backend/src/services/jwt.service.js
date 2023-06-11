import jwt from "jsonwebtoken";

const jwtConfig = {
    ac_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
    rf_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    ac_expired_millisecond: process.env.JWT_ACCESS_TOKEN_EXPIRED_MILLISECONDS
}

const createAccessToken = (userId, isAdmin) => {
    try {
        const token = jwt.sign(
            {id: userId, isAdmin: isAdmin},
            jwtConfig.ac_secret, {
                expiresIn: new Date(jwtConfig.ac_expired_millisecond).getTime(),
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

const verifyAccessToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwtConfig.ac_secret);
        return decoded;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const servicesTokens = {
    createAccessToken,
    createRefreshToken,
    verifyAccessToken,
}


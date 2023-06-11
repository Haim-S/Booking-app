
export const createError = (status, message) =>{
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

export const tryCatchError = (controller) => async(req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}
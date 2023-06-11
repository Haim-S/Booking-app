import mongoose from "mongoose";


const initialMongoConnection = async() => {
   
    try {
        await mongoose.connect(
            process.env.MONGODB_LOCAL
            .replace("<name>", process.env.PROJECT_NAME
            ));
        console.log("we are connected to mongodb");
        // mongoose.connection.on("disconnected", ()=>{
        //     console.log("mongo disconnect");
        // })
    } catch (error) {
        console.log(error);
    }
};



export default initialMongoConnection;
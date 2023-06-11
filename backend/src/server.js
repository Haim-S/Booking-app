import dotenv from "dotenv"
import server from "./app/app.js";
import initialMongoConnection from "./database/MongoConnection.js";



dotenv.config()
initialMongoConnection()

const port = process.env.PORT
server.listen(port, ()=>{
    console.log(`Connected to backend!, on port ${port}`);
})
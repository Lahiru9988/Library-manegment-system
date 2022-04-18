import mongoose from "mongoose";
import config from"../configs";
import logger from "../utils/logger";


let database;

 //used array funtion 
const connect = async() => {          
       const MONGODB_URL=config.DB_CONNECTION_STRING;  


       if(database)return;

       mongoose
       .connect(MONGODB_URL) //return database connection
       .then((connection) => {
           database =connection;
           logger.info("Database Synced");
        })
        .catch((err) => {
            logger.error(err.message);
        });

};
export{connect};
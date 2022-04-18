import express from "express";
import cors from  "cors";
import logger from "./utils/logger";
import "dotenv/config";
import {connect} from "./utils/database.connection";



const app  = express();
const PORT = process.env.PORT || "8090";


 app.use(cors());
 app.use (express.json({ limit: "20mb" }));

 app.get("/",(req,res,next)  =>{
   res.send("<h2><u>Library Management System API Ner update my name is lahiru </u></h2>")
   next();
 });

 app.listen(PORT, () => {
   logger.info(' server is up and  running on PORT ${PORT}');
   connect();
 } );



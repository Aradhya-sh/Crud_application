import mongoose from 'mongoose';
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import userRoute from "../server/routes/userRoute.js";

const PORT=5000;
const app = express();
app.use(cors()); 
app.use(bodyparser.json()); 
// app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testcurd', {
}).then(() => {
  console.log('Successfully connected to MongoDB');
 
}).catch(err => {
  console.error('Connection error', err); 
});  
   
app.use('/', userRoute);   
app
 
app.listen(PORT, ()=>{  
  console.log('Server is running on ',`${PORT}`);
}); 





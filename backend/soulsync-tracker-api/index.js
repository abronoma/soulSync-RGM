import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import cors from "cors"

const app = express();

const port = process.env.PORT || 3001;

//creating Database
 await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to Soulsync-API"))
  .catch((err) => console.error("MongoDB connection error:", err));

//global middleware

app.use(express.json());

app.use(cors());

//routes for ads 
//app.use(soulRouter);

//routes for user
//app.use(userRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}.`)
})

import express from 'express';
import mongoose from 'mongoose';
import morgan from "morgan";
import { userRouter} from './routes/auth.js';
import { addSoulRouter } from './routes/addSoul.js';
import "dotenv/config";
import cors from "cors"


const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



//creating Database
 await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to Soulsync-API"))
  .catch((err) => console.error("MongoDB connection error:", err));



//Routes
app.use("/api", userRouter);
app.use("/api", addSoulRouter);
// app.use("/api", categoryRouter);
// app.use("/api", farmerProductRouter);
// app.use("/api", orderRouter);
// app.use("/api", subscriptionRouter);




app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}.`)
})

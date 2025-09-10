import { Router } from "express";
import { addSoul } from "../controllers/addSoul.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const addSoulRouter = Router()

// Only authenticated users (volunteers or admin) can add souls
addSoulRouter.post("/addSoul", isAuthenticated, addSoul);



import { Router } from "express";
import { addSoul, getSouls, getSoulById, updateSoul, deleteSoul } from "../controllers/soul.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

export const soulRouter = Router()

// Only authenticated users (volunteers or admin) can add souls
soulRouter.post("/addSouls", isAuthenticated, isAuthorized(["volunteer", "admin"]), addSoul);

// Get all souls
soulRouter.get("/allSouls", getSouls);

// Get one soul
soulRouter.get("/:id", getSoulById);

// Update soul
soulRouter.put("/:id", isAuthenticated, isAuthorized(["volunteer", "admin"]), updateSoul);

// Delete soul
soulRouter.delete("/:id", isAuthenticated, isAuthorized(["admin"]), deleteSoul);



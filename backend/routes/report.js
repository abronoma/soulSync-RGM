import express from "express";
import { getMonthlyReport } from "../controllers/report.js";

const router = express.Router();

router.get("/", getMonthlyReport);

export default router;

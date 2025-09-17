import express from "express";
import {
  addFollowUp,
  getFollowUpsBySoul,
  getFollowUpsByVolunteer,
  updateFollowUp,
  completeFollowUp,
  deleteFollowUp
} from "../controllers/followup.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authenticate, addFollowUp);
router.get("/soul/:soulId", authenticate, getFollowUpsBySoul);
router.get("/volunteer/:volunteerId", authenticate, getFollowUpsByVolunteer);
router.put("/:followUpId/complete", completeFollowUp);
router.put("/:id", authenticate, updateFollowUp);
router.delete("/:id", authenticate, deleteFollowUp);


export default router;

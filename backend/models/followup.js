import mongoose, { Schema, model } from "mongoose";

const followUpSchema = new Schema({
  volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: "Volunteer", required: true },
  soulId: { type: mongoose.Schema.Types.ObjectId, ref: "Soul", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  notes: { type: String },
  status: { type: String, enum: ["scheduled", "completed", "missed"], default: "scheduled" },
  completedAt: { type: Date }
});


export const FollowUpModel = model("FollowUp", followUpSchema);

import { mongoose, Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const soulSchema = new Schema(
  {
    fullName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    outreachStatus: {
      type: String,
      enum: ["Prayed With", "Gave Life to Christ", "Was born again"],
      required: true,
    },
    notes: { type: String, default: "" },

    // The volunteer assigned to this soul
    assignedVolunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // ✅ always required
    },

    // The volunteer who logged this soul (same as assignedVolunteer in your case)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

soulSchema.plugin(normalize);

export const SoulModel = model("Soul", soulSchema);

import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";
import { imageUpload } from "../middlewares/uploads.js";

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  contactName: { type: String },
  imageUpload: { type: String },

  role: {
    type: String,
    default: "volunteer",
    enum: ["volunteer", "admin"]
  },
});

userSchema.plugin(normalize);
export const userModel = model("User", userSchema);

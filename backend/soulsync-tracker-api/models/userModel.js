import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  contactName: { type: String },
  uploadProfile: { type: String },

  role: {
    type: String,
    default: "volunteer",
    enum: ["volunteer", "admin"]
  },
});

userSchema.plugin(normalize);
export const userModel = model("User", userSchema);

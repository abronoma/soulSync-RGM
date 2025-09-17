const soulSchema = new Schema({
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
  assignedVolunteer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
  followUps: [
    {
      date: { type: Date, default: Date.now },
      notes: { type: String, required: true },
      status: { type: String, enum: ["Pending", "Completed"], default: "Pending" }
    }
  ]
}, { timestamps: true });


soulSchema.plugin(normalize);

export const SoulModel = model("Soul", soulSchema);

import { SoulModel } from "../models/soul.js";
import { addSoulValidator } from "../validators/soul.js";

export const addSoul = async (req, res, next) => {
  try {
    const { error, value } = addSoulValidator.validate(req.body);
    if (error) return res.status(422).json({ message: error.details[0].message });

    // create soul record
    const newSoul = await SoulModel.create({
      ...value,
      createdBy: req.auth.id, // user making the request (authenticated)
    });

    return res.status(201).json({
      message: "Soul record created successfully",
      data: newSoul,
    });
  } catch (err) {
    next(err);
  }
};

// Get all souls
export const getSouls = async (req, res) => {
  try {
    const souls = await SoulModel.find();
    res.json(souls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single soul by ID
export const getSoulById = async (req, res) => {
  try {
    const soul = await SoulModel.findById(req.params.id);
    if (!soul) return res.status(404).json({ error: "Soul not found" });
    res.json(soul);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update soul
export const updateSoul = async (req, res) => {
  try {
    const soul = await SoulModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!soul) return res.status(404).json({ error: "Soul not found" });
    res.json({ message: "Soul updated successfully", soul });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete soul
export const deleteSoul = async (req, res) => {
  try {
    const soul = await SoulModel.findByIdAndDelete(req.params.id);
    if (!soul) return res.status(404).json({ error: "Soul not found" });
    res.json({ message: "Soul deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
import { SoulModel } from "../models/addSoul.js";
import { addSoulValidator } from "../validators/addSoul.js";

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

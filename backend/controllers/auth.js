import { imageUpload } from "../middlewares/uploads.js";
import { userModel } from "../models/userModel.js";
import { sendEmail } from "../utils/mailing.js";
import {
  loginUserValidator,
  registerUserValidator,
  updateUserValidator,
} from "../validators/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    // validate request body
    const { error, value } = registerUserValidator.validate({
      ...req.body,
      imageUpload: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }

    // check if user already exists
    const user = await userModel.findOne({
      $or: [{ username: value.username }, { email: value.email }],
    });
    if (user) {
      return res.status(409).json("User already exists");
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(value.password, 10);

    // default role = volunteer
    let role = "volunteer";

    // if the request has an authenticated user who is an Admin,
    // and a role is passed, then assign that role
    if (req.auth && req.auth.role === "Administrator" && value.role) {
      role = value.role;
    }

    // create user
    const newUser = await userModel.create({
      ...value,
      password: hashedPassword,
      role,
    });

    // send welcome email
    await sendEmail(
      newUser.email,
      "Welcome To SoulSync",
      `Hello ${newUser.username}, you are welcome!`
    );

    // generate JWT
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      message: "User created successfully",
      token,
      data: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

  export const loginUser = async (req, res, next) => {
  try {
    // Validate request body with Joi
    const { error, value } = loginUserValidator.validate(req.body);
   
    if (error) {
      return res.status(422).json({ message: error.details[0].message });
    }

    // Find user by email
    const user = await userModel.findOne({ email: value.email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare password
    const isMatch = bcrypt.compareSync(value.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: user.id, role: user.role }, 
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Respond with user info + token
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};



  export const updateUser = async (req, res, next) => {
    try {
    const { error, value } = updateUserValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const result = await userModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    res.status(200).json(result);
} catch (error) {
  next(error)
}
  }


export const getAuthenticatedUser = async (req, res, next) => {
  try {
    const result = await userModel
      .findById(req.auth.id)
      .select({ password: false });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
  

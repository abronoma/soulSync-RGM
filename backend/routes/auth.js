import { Router } from "express";
import { imageUpload } from "../middlewares/uploads.js";
import { getAuthenticatedUser, loginUser, registerUser, updateUser } from '../controllers/auth.js'
import { isAuthenticated, isAuthorized } from '../middlewares/auth.js';

export const userRouter = Router()

//register user
userRouter.post("/register", registerUser);

//login user
userRouter.post('/login', loginUser);

//update user
userRouter.put('/user/:id',  imageUpload.single("uploadProfile"),
    isAuthenticated,
    isAuthorized(['volunteer', 'admin']),
    updateUser);

//get user profile
 userRouter.get('/user/me', isAuthenticated, getAuthenticatedUser )

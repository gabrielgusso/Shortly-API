import { Router } from "express"
import tokenValidation from "../middlewares/tokenValidation.middleware.js"
import { userController } from "../controllers/user.controller.js"

export const userRoute = Router()

userRoute.get("/users/me", tokenValidation, userController)
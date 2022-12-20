import { Router } from "express";
import { signUpAuthController, signInAuthController } from "../controllers/auth.controller.js";
export const authRoute = Router();

authRoute.post("/sign-in", signInAuthController);

authRoute.post("/sign-up", signUpAuthController);
import { Router } from "express"
import { urlMiddleware } from "../middlewares/url.middleware.js"
import { urlController } from "../controllers/url.controller.js"
import tokenValidation from "../middlewares/tokenValidation.middleware.js"

export const urlRoute = Router()

urlRoute.post("/urls/shorten", tokenValidation, urlMiddleware, urlController)


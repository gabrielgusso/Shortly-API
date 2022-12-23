import { Router } from "express"
import { urlMiddleware } from "../middlewares/url.middleware.js"
import { urlController, urlIdController, urlOpenController, urlDeleteController } from "../controllers/url.controller.js"
import tokenValidation from "../middlewares/tokenValidation.middleware.js"

export const urlRoute = Router()

urlRoute.post("/urls/shorten", tokenValidation, urlMiddleware, urlController)

urlRoute.get("/urls/:id", urlIdController)

urlRoute.get("/urls/open/:shortUrl", urlOpenController)

urlRoute.delete("/urls/:id", tokenValidation, urlDeleteController)


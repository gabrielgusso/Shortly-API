import { Router } from "express"
import { rankingController } from "../controllers/ranking.controller.js"

export const rankingRoute = Router()

rankingRoute.get("/ranking", rankingController)
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { authRoute } from "./routes/auth.router.js"
import { urlRoute } from "./routes/url.router.js"
import { userRoute } from "./routes/user.router.js"
import { rankingRoute } from "./routes/ranking.router.js"
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())

app.use(authRoute)
app.use(urlRoute)
app.use(userRoute)
app.use(rankingRoute)



app.listen(process.env.PORT, () => {
  console.log("Server listening on port 4000.")
})

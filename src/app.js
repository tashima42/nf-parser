import express from "express"
import cors from "cors"

import callback from "./utils/express-callback.js"

import {
  getNfceInformationController,
} from "./controllers/index.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {return res.status(200).send({success: true})})

app.get(
  "/nfce",
  callback(getNfceInformationController)
)

export default app

import express from "express"
import cors from "cors"

import callback from "./utils/express-callback.js"

import {
  getNfceInformationController,
} from "./controllers/index.js"

//pr.getNfce({url: "http://www.fazenda.pr.gov.br/nfce/qrcode?p=41220176189406000983651180003585831191202186|2|1|1|5CE86D7F913341DD661F9D5F606DD4C3E21647AF"})

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  return res.status(200).send({success: true})
})
app.get("/nfce", callback(getNfceInformationController))

export default app

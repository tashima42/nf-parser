import app from "./app.js"
//import { connectDb } from "./repositories/index.js"

const port = process.env.PORT || 3000

//connectDb().then(() => {
app.listen(port, () => {
  console.info("Server is listening on port ", port)
})
//})

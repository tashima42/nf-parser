import {http, htmlParser} from "../../utils/index.js"

import buildPr from "./pr.js"

const pr = buildPr({http, htmlParser})

const nfce = {
  pr,
}

export {
  nfce
}

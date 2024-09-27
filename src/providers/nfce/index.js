import {htmlParser} from "../../utils/index.js"

import buildPr from "./pr.js"

const pr = buildPr({htmlParser})

const nfce = {
  pr,
}

export {
  nfce
}

import {http, htmlParser} from "../../utils/index.js"

import buildPr from "./pr.js"

const pr = buildPr({http, htmlParser})

//pr.getNfce({url: "http://www.fazenda.pr.gov.br/nfce/qrcode?p=41220176189406000983651180003585831191202186|2|1|1|5CE86D7F913341DD661F9D5F606DD4C3E21647AF"})

const nfce = {
  pr,
}

export {
  nfce
}

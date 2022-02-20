import {nfce} from "../providers/nfce/index.js"

import buildGetNfceInformation from "./get-nfce-information.js"

const getNfceInformation = buildGetNfceInformation({nfce})

export {
  getNfceInformation,
}

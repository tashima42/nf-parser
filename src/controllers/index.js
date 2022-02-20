import {getNfceInformation} from "../use-cases/index.js"

import buildGetNfceInformationController from "./get-nfce-information-controller.js"

const getNfceInformationController = buildGetNfceInformationController({
  getNfceInformation: getNfceInformation.run
})

export {
  getNfceInformationController,
}

export default function ({getNfceInformation}) {
  return async function (httpRequest) {
    try {
      const {url} = httpRequest.query
      const nfceInformation = await getNfceInformation({url})
      return {
        statusCode: 200,
        body: {
          success: true,
          nfce: nfceInformation
        }
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: {
          success: false,
          error: {
            message: error.message,
            stack: error.stack,
          }
        }
      }
    }
  }
}

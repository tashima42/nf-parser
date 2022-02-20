export default function ({http, htmlParser}) {
  const headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-gpc": "1",
    "upgrade-insecure-requests": "1"
  }
  return Object.freeze({
    getNfce,
  })

  async function getNfce({url}) {
    const {data: html} = await http.request({
      method: 'GET',
      url,
      headers
    })
    const products = getProducts(html)
    return products
  }

  function getProducts(html) {
    const dom = htmlParser.parse(html)
    const tableRows = Array.from(dom.window.document.querySelectorAll("table tr"))
    const products = tableRows.map(row => {
      const productInfo = row.querySelector("td:nth-child(1)")
      const valueInfo = row.querySelector("td:nth-child(2)")
      const name = productInfo.querySelector(".txtTit2").textContent
      const code = parseCode(productInfo.querySelector(".RCod").textContent)
      const quantity = parseQuantity(productInfo.querySelector(".Rqtd").textContent)
      const unityType = parseUnityType(productInfo.querySelector(".RUN").textContent)
      const unitaryValue = parseUnitaryValue(productInfo.querySelector(".RvlUnit").textContent)
      const totalValue = valueInfo.querySelector('.valor').textContent
      return {name, code, quantity, unityType, unitaryValue, totalValue}
    })
    return products

    function parseCode(code) {
      return code.replace('(Código: ', '').replace(')', '')
    }
    function parseQuantity(quantity) {
      return quantity.replace('Qtde.:', '').replace('\n', '').replace('      ', '').replace('     ', '').replace(/\n/, '')
    }
    function parseUnityType(unityType) {
      return unityType.replace('\n', '').replace('      ', '').replace('UN: ', '').replace('     ', '').replace(/\n/, '')
    }
    function parseUnitaryValue(value) {
      return value.replace('\n', '').replace('      ', '').replace('Vl. Unit.: ', '').replace('     ', '').replace(/\n/, '')
    }
  }
}

const nfce = {
  products: [
    {
      name: "",
      code: "",
      quantity: 1,
      unity: "",
      unitaryValue: 1,
      totalValue: ""
    }
  ],
  totalQuantity: 1,
  totalValue: "",
  discount: 1,
}


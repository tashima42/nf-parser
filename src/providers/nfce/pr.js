export default function ({htmlParser}) {
  return Object.freeze({
    getNfce,
  })

  async function getNfce({url}) {
    const res = await fetch(url, {
      "credentials": "omit",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:130.0) Gecko/20100101 Firefox/130.0",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Sec-GPC": "1",
          "Upgrade-Insecure-Requests": "1",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "none",
          "Sec-Fetch-User": "?1",
          "Priority": "u=0, i"
      },
      "method": "GET",
      "mode": "cors",
      "redirect": "follow",
    });

    const html = await res.text()

    const dom = htmlParser.parse(html)
    const products = getProducts(dom)
    const sellerInfo = getSellerInfo(dom)
    const consumer = getConsumerInfo(dom)
    const nfKey = getNfKey(dom)
    const nfInfo = getNfInfo(dom)
    return {products, sellerInfo, consumer, nfKey, nfInfo}
  }

  function getNfInfo(dom) {
    const nfInfo = Array.from(dom.window.document.querySelector("#infos div:nth-child(1)").querySelectorAll("ul"))
    const nfInfoString = nfInfo[0].querySelector("li:nth-child(1)").textContent
    const emissionDate = parseEmissionDate(nfInfoString)
    return {emissionDate}

    function parseEmissionDate(input) {
      const regex = /\d\d\/\d\d\/\d\d\d\d/g;
      const dateString = input.match(regex)[1]
      const year = dateString.substring(6, dateString.length)
      const monthIndex = parseInt(dateString.substring(3, 5)) - 1
      const day = dateString.substring(0, 2)
      return new Date(year, monthIndex, day);
    }
  }

  function getNfKey(dom) {
    const nfKeyInfo = dom.window.document.querySelector("#infos div:nth-child(2)")
    const nfKey = nfKeyInfo.querySelector("span").textContent
    return nfKey
  }

  function getConsumerInfo(dom) {
    const consumerInfo = Array.from(dom.window.document.querySelector("#infos div:nth-child(3)").querySelectorAll("ul"))
    const cpf = parseCpf(consumerInfo[0].querySelector("li:nth-child(1)").textContent)
    const name = parseName(consumerInfo[0].querySelector("li:nth-child(2)").textContent)
    return {cpf, name}

    function parseCpf(cpf) {
      return cpf.replace('\n', '').replace(/\n/, '').replace('     ', '').replace("CPF: ", '').replace('    ', '')
    }
    function parseName(name) {
      return name.replace('\n', '').replace(/\n/, '').replace("Nome: ", '').replace('    ', '').replace(' ', '').replace('    ', '')
    }
  }

  function getSellerInfo(dom) {
    const sellerInfo = dom.window.document.querySelector("#conteudo .txtCenter")
    const name = sellerInfo.querySelector("#u20").textContent
    const cnpj = parseCnpj(sellerInfo.querySelector("div:nth-child(2)").textContent)
    const address = parseAddress(sellerInfo.querySelector("div:nth-child(3)").textContent)
    return {name, cnpj, address}

    function parseCnpj(cnpj) {
      return cnpj.replace('\n', '').replace('\t', '').replace(/\t/, '').replace('    ', '').replace('CNPJ:', '').replace(/\n/, '').replace('\t\t    ', '')
    }
    function parseAddress(address) {
      return address.replace(/\n/, '').replace('\t', '').replace(/\t/, '').replace('\n', '').replace(/\n/, '').replace('\t\t', '').replace('\t\t', '').replace('\n\t\t', '').replace('\n\t\t', '')
    }
  }

  function getProducts(dom) {
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


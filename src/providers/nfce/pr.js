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
    /*
    const html = `
<html><title>DF-e Portal/Pr - Consulta DANFE NFC-e</title><head>  <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=9, IE=edge" /> <link rel="stylesheet" type="text/css" href="https://www.dfews.fazenda.pr.gov.br/dfews/css/nfce/danferesponsivo/jquery.mobile-1.4.5.min.css"> <link rel="stylesheet" type="text/css" href="https://www.dfews.fazenda.pr.gov.br/dfews/css/nfce/danferesponsivo/nfceMob.css"> <link rel="stylesheet" type="text/css" href="https://www.dfews.fazenda.pr.gov.br/dfews/css/nfce/danferesponsivo/nfceMob_ie.css"> <link rel="stylesheet" type="text/css" href="https://www.dfews.fazenda.pr.gov.br/dfews/css/print.css"> <script type="text/javascript" src="https://www.dfews.fazenda.pr.gov.br/dfews/js/nfce/danferesponsivo/index.js"></script> <script type="text/javascript" src="https://www.dfews.fazenda.pr.gov.br/dfews/js/nfce/danferesponsivo/jquery.js"></script> <script type="text/javascript" src="https://www.dfews.fazenda.pr.gov.br/dfews/js/nfce/danferesponsivo/jquery.mobile-1.4.5.min.js"></script> <script type="text/javascript" src="https://www.dfews.fazenda.pr.gov.br/dfews/js/nfce/danferesponsivo/jqueryui.js"></script> <script type="text/javascript" src="https://www.dfews.fazenda.pr.gov.br/dfews/js/nfce/danferesponsivo/util.js"></script></head><body>
<div data-role="header" xmlns:n="http://www.portalfiscal.inf.br/nfe" xmlns:chave="http://exslt.org/chaveacesso" xmlns:r="http://www.serpro.gov.br/nfe/remessanfe.xsd">
 <h1 class="tit">
  <div class="notprint">
   <p align="center"><a href=javascript:window.print()>Imprimir</a></p>
  </div>
  <img src="https://www.dfews.fazenda.pr.gov.br/dfews/images/logoNFCe2.PNG" width="90" height="64" alt="NFC-e">
  </img>
  <p>DOCUMENTO AUXILIAR DA NOTA FISCAL DE CONSUMIDOR ELETRÔNICA</p>
  <p></p>
 </h1>
</div>
<div data-role="content" xmlns:n="http://www.portalfiscal.inf.br/nfe" xmlns:chave="http://exslt.org/chaveacesso" xmlns:r="http://www.serpro.gov.br/nfe/remessanfe.xsd">
 <div id="conteudo">
  <div id="avisos">
  </div>
  <div class="txtCenter">
   <div id="u20" class="txtTopo">CONDOR SUPER CENTER LTDA</div>
   <div class="text">
        CNPJ:
        76.189.406/0009-83</div>
   <div class="text">RUA RIO GRANDE DO SUL,
    50,
    ,
    CENTRO,
    Londrina,
    PR</div>
  </div>
  <table border="0" align="center" cellpadding="0" cellspacing="0" id="tabResult" data-filter="true">
   <tr id="Item + 1">
    <td valign="top">
     <span class="txtTit2">TOP ARRAZANTTY BASICO PGG</span>
     <span class="RCod">(Código: 16818990)</span>
     <br></br>
     <span class="Rqtd">
      <strong>Qtde.:</strong>1
     </span>
     <span class="RUN">
      <strong>UN: </strong>PC
     </span>
     <span class="RvlUnit">
      <strong>Vl. Unit.:</strong> 28,9
     </span>
    </td>
    <td align="right" valign="top" class="txtTit3 noWrap">Vl. Total
    
     <br></br>
     <span class="valor">28,90</span>
    </td>
   </tr>
   <tr id="Item + 2">
    <td valign="top">
     <span class="txtTit2">TOP M.BRAZIL CBOJO PTO PGG</span>
     <span class="RCod">(Código: 19647330)</span>
     <br></br>
     <span class="Rqtd">
      <strong>Qtde.:</strong>1
     </span>
     <span class="RUN">
      <strong>UN: </strong>PC
     </span>
     <span class="RvlUnit">
      <strong>Vl. Unit.:</strong> 25,9
     </span>
    </td>
    <td align="right" valign="top" class="txtTit3 noWrap">Vl. Total
    
     <br></br>
     <span class="valor">25,90</span>
    </td>
   </tr>
   <tr id="Item + 3">
    <td valign="top">
     <span class="txtTit2">BLUSA L.DELICATTA BASICA SORT.FEM.PGG</span>
     <span class="RCod">(Código: 19145630)</span>
     <br></br>
     <span class="Rqtd">
      <strong>Qtde.:</strong>1
     </span>
     <span class="RUN">
      <strong>UN: </strong>PC
     </span>
     <span class="RvlUnit">
      <strong>Vl. Unit.:</strong> 21,9
     </span>
    </td>
    <td align="right" valign="top" class="txtTit3 noWrap">Vl. Total
    
     <br></br>
     <span class="valor">21,90</span>
    </td>
   </tr>
   <tr id="Item + 4">
    <td valign="top">
     <span class="txtTit2">SAB.PROTEX AVEIA 85G C6 LP-</span>
     <span class="RCod">(Código: 17711610)</span>
     <br></br>
     <span class="Rqtd">
      <strong>Qtde.:</strong>1
     </span>
     <span class="RUN">
      <strong>UN: </strong>UN
     </span>
     <span class="RvlUnit">
      <strong>Vl. Unit.:</strong> 14,49
     </span>
    </td>
    <td align="right" valign="top" class="txtTit3 noWrap">Vl. Total
    
     <br></br>
     <span class="valor">14,49</span>
    </td>
   </tr>
   <tr id="Item + 5">
    <td valign="top">
     <span class="txtTit2">IOG.BATAVO NATURAL INTEG.170G</span>
     <span class="RCod">(Código: 6484690)</span>
     <br></br>
     <span class="Rqtd">
      <strong>Qtde.:</strong>1
     </span>
     <span class="RUN">
      <strong>UN: </strong>UN
     </span>
     <span class="RvlUnit">
      <strong>Vl. Unit.:</strong> 2,19
     </span>
    </td>
    <td align="right" valign="top" class="txtTit3 noWrap">Vl. Total
    
     <br></br>
     <span class="valor">2,19</span>
    </td>
   </tr>
  </table>
  <div id="totalNota" class="txtRight">
   <div id="linhaTotal">
    <label>Qtd. total de itens:</label>
    <span class="totalNumb">5</span>
   </div>
   <div id="linhaTotal">
    <label>Valor total R$:</label>
    <span class="totalNumb">93,38</span>
   </div>
   <div id="linhaTotal">
    <label>Descontos R$:</label>
    <span class="totalNumb">0,10</span>
   </div>
   <div id="linhaTotal" class="linhaShade">
    <label>Valor a pagar R$:</label>
    <span class="totalNumb txtMax">93,28</span>
   </div>
   <div id="linhaForma">
    <label class="txtMax2">Forma de pagamento:</label>
    <span class="totalNumb txtMax2">Valor pago R$:</span>
   </div>
   <div id="linhaTotal">
    <label class="tx">Crédito Loja</label>
    <span class="totalNumb">76,90</span>
   </div>
   <div id="linhaTotal">
    <label class="tx">Cartão de Débito 2</label>
    <span class="totalNumb">16,38</span>
   </div>
   <div id="linhaTotal" class="spcTop">
    <label class="txtObs">Informação dos Tributos Totais Incidentes (Lei Federal 12.741/2012) R$</label>
    <span class="totalNumb txtObs">13,80</span>
   </div>
  </div>
 </div>
 <div id="infos" class="txtCenter">
  <div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-collapsed="false">
   <h4>Informações gerais da Nota</h4>
   <ul data-role="listview" data-inset="false">
    <li>
     <strong>EMISSÃO NORMAL</strong>
     <br></br>
     <strong>Número: </strong>358583
     <strong> Série: </strong>118
     <strong> Emissão: </strong>19/01/2022 11:02:19  - Via Consumidor

     <br></br>
     <strong>Protocolo de Autorização: </strong>141220081465125       19/01/2022 11:02:20
     <br></br>
     <strong>Ambiente de Produção - 
Versão XML: 4.00 - Versão XSLT: 2.03</strong>
    </li>
   </ul>
  </div>
  <div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-collapsed="false">
   <h4>Chave de acesso</h4>
   <ul data-role="listview" data-inset="false">
    <li>Consulte pela Chave de Acesso em
          	
              http://www.fazenda.pr.gov.br/
            	
     <br></br>
     <strong>Chave de acesso:</strong>
     <br></br>
     <span class="chave">4122 0176 1894 0600 0983 6511 8000 3585 8311 9120 2186</span>
    </li>
   </ul>
  </div>
  <div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-collapsed="false">
   <h4>Consumidor</h4>
   <ul data-role="listview" data-inset="false">
    <li>
     <strong>CPF: </strong>709.506.019-34
    </li>
    <li>
     <strong>Nome: </strong>MIDIA MATEUS LEITE TASHIMA
    </li>
   </ul>
  </div>
  <div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-collapsed="false">
   <h4>Informações de interesse do contribuinte</h4>
   <ul data-role="listview" data-inset="false">
    <li>&lt;crm&gt;70950601934|809|9|118&lt;/crm&gt;</li>
   </ul>
  </div>
  <div>Secretaria de Estado da Fazenda do Paraná - Data/Hora da Consulta: 20/02/2022 09:30:07</div>
 </div>
</div></body></html>
    `
    */

    const dom = htmlParser.parse(html)
    const products = getProducts(dom)
    const sellerInfo = getSellerInfo(dom)
    const consumer = getConsumerInfo(dom)
    const nfKey = getNfKey(dom)
    const nfInfo = getNfInfo(dom)
    console.log({products, sellerInfo, consumer, nfKey, nfInfo})
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


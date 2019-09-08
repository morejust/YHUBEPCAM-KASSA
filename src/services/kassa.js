import * as waves from '@waves/waves-transactions'
import db from './db.json'

const { broadcast, verify, waitForTx, libs } = waves

window.waves = waves

const nodeUrl = 'https://testnodes.wavesnodes.com'
window.nodeUrl = nodeUrl

export const kassaAddress = '3MvgqcdKFrgrNjEbgtsV42Jd3KnkgkywWJY'

export const verifyTx = async tx => {
  console.log('tx', tx)

  const parsed = JSON.parse(tx)
  console.log('parsed', parsed)

  return verify(parsed)
}

export const sendTx = async tx => {

  console.log('tx', tx)

  const parsed = JSON.parse(tx)
  console.log('parsed', parsed)

  console.log('verify', verify(parsed))

  return broadcast(parsed, nodeUrl)
}

export const fetchTxList = async (address = kassaAddress, limit = 100) => {
  return fetch(`${nodeUrl}/transactions/address/${address}/limit/${limit}`)
    .then(res => res.json())
}

export const decodeProduct = productId => {
  return db.items.find(product => product.i === parseInt(productId, 10))
}

export const decodeProducts = tx => {
  const productList = libs.crypto.base58Decode(tx.attachment).toString()

  // const productList = "333,123"

  const products = productList.split(',')

  console.log('products', products)
  console.log('decoded', products.map(id => decodeProduct(id)))

  return products.map(id => decodeProduct(id)).filter(p => !!p)
}

export { waitForTx }
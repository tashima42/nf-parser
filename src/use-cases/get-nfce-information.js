export default function ({nfce}) {
  return Object.freeze({
    run,
  })
  async function run({url}) {
    const nf = await nfce.pr.getNfce({url})
    return nf
  }
}

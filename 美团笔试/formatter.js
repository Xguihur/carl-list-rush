const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

const main = async () => {
  const n = await readline()
  console.log(n)
  // 终止 readline 继续执行
  rl.close()
}

main()

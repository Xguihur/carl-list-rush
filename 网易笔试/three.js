const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let nums = await readline()
  let num = parseInt(nums)

  let line = await readline()
  let tokens = line.split('')
  console.log(14)
})()

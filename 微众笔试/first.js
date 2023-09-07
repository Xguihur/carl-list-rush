const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let n = await readline()
  n = parseInt(n)
  console.log(n)
  let line = await readline()
  let tokens = line.split(' ')
  tokens.forEach(item => {
    item = parseInt(item)
  })
  console.log(solute(n, tokens))
})()

const solute = (n, arr) => {
  let result = 0
  let hash = new Set()
  for (let i = 0; i < n; i++) {
    if (!hash.has(arr[i])) {
      result++
      hash.add(arr[i])
    } else {
      return result //直接结束
      // break
    }
  }
  return result
}

// 思路：意思就是一个数组从头到遇到第一个重复元素的位置的长度
// 使用 hash 表来实现遍历，一旦重复就输出长度

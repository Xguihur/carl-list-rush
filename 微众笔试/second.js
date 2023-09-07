const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

const solute = (n, arr) => {
  let result = 0
  let myadd = []
  let i = 0
  for (i; i < n; i++) {
    let cur = arr[i]
    while (myadd.includes(cur)) {
      result++
      cur++
    }
    // 最终加入到add中
    myadd.push(cur)
  }
  return result
}

void (async function () {
  // Write your code here
  let n = await readline()
  n = parseInt(n)
  let line = await readline()
  let tokens = line.split(' ')
  tokens = tokens.map(item => {
    return Number(item)
  })
  // console.log(solute(5, [1, 1, 2, 3, 3]))
  console.log(solute(n, tokens))
})()

// 思路：让数组中的数字都不重复，如果重复就+1
// 使用 hash 表来实现遍历，如果hash重复了这个值就+1，直到不重复了就加入 hash 中，每次+1记录次数

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  // 获取 n 和 m
  let line = await readline()
  let tokens = line.split(' ')
  let n = parseInt(tokens[0])
  let m = parseInt(tokens[1])
  // 构造矩阵
  const userArr = []
  for (let i = 0; i < n; i++) {
    // 用户输入行，接着用 ‘ ’ 分割存入矩阵中
    let line = await readline()
    userArr.push(line.split(' '))
  }
  // console.log(userArr)
  // 调用核心函数，输出结果
  const result = Solute(n, m, userArr)
  console.log(result)
})()

// 核心函数
const Solute = (n, m, arrList) => {
  let result = 0
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      // 此时拿到原点了，获取以此为原点的子矩阵
      const curArr = []
      for (let k = i; k < i + 3; k++) {
        curArr.push(arrList[k][j])
        curArr.push(arrList[k][j + 1])
        curArr.push(arrList[k][j + 2])
      }
      // 判断当前矩阵是否为好矩阵 如果 是 则总值 ++
      // console.log('当前矩阵', curArr)
      const data = isGood(curArr)
      console.log(data)
      if (data) {
        result++
      }
    }
  }
  return result
}

// 判断是否为 好矩阵 的函数
const isGood = arr => {
  // 判断是否包含 ABC 、 判断是否含有非 ABC 的字母，可以用哈希表来判断
  const hash = {
    A: 0,
    B: 0,
    C: 0
  }
  arr.map(item => {
    // 构造hash
    if (item === 'A') {
      hash.A++
    } else if (item === 'B') {
      hash.B++
    } else if (item === 'C') {
      hash.C++
    }
    // 其他情况不做处理
  })
  console.log(hash)
  // 最后判断是否都含有 ABC 和是否包含非 ABC 的字母
  if (hash.A === 0 || hash.B === 0 || hash.C === 0 || hash.A + hash.B + hash.C !== 9) {
    return false
  }
  // 判断相邻 不相等
  for (let i = 0; i < arr.length; i++) {
    // 当 i 和 i+1 相等 或者 i 和 i+3 相等，都返回 false
    if (arr[i] === arr[i + 1]) return false
    if (arr[i + 3] && arr[i] === arr[i + 3]) return false
  }
  return true
}

// 1. 先获取到 n 和 m
// 2. 让用户将矩阵输入完毕再做处理，用二维数组存放
// 开始解题
// 3. 先获取子矩阵：从左往右，从上往下取 3x3 矩阵做处理：左上-->右上-->左下-->右下
// 1. 传入参数，从（0，0）开始遍历获取子矩阵，直到（n-3,m-3）结束，当从（0，0）开始表示以 （0，0）为左上角为原点的3x3矩阵
// 2. 每获取到一个子矩阵，就调用 4 👇，做校验，如果合格，结果 +1
// 4. 接着实现比对函数，做校验是否为 好矩阵

// 4 4
// DABC
// ABAB
// BABA
// BBAB

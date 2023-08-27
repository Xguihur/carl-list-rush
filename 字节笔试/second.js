const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  nums = await readline()
  let num = parseInt(nums) //询问次数
  const arrs = []
  while (num-- > 0) {
    let line = await readline()
    let tokens = line.split(' ')
    tokens.forEach(item => {
      item = parseInt(item)
    })
    arrs.push(tokens)
  }
  // console.log(arrs)
  // 输出结果
  solute(arrs)
})()

// 1. 如果 n/2 大于 3，那就直接返回 -1 ，至少要两倍红球的数量才可能存在结果
// 2. 如果 n/2 大于 3了，那就需要进行交换位置，使用 特定算法（要最优的，最小次数交换位置） 交换位置，然后 判断任意两个红球位置是否不小于k，如果是就返回最小交换次数
// 难点：
// 1. 找到那个 特定的算法，最优交换位置算法
// 1.1 用循环栈的方式模拟循环，让他们之间的距离大于 k，找到那个大于 k 的位置，将不大于k的那个球换过去
// 2. 判断三个红球之间距离不小于k

// 核心代码
const solute = arrs => {
  const length = arrs.length
  // 循环输出结果
  arrs.forEach(item => {
    if (item[0] / 2 <= 3) {
      console.log(-1) //这里就有 5% 的通过率
      // 下一循环
    } else {
      // 寻找最优交换次数
      const data = change(item)
      console.log(data)
    }
  })
}
// 寻找交换次数的方法
const change = arr => {
  // 第一个和第二个位置做差得到值，用 k - 差，如果是正数表示需要交换，暂时不动
  // 第二个和第三个位置做差得到值，用 k-差 ，如果是正数也需要交换，暂时不动
  // 第一个和第三个位置做差得到值，用 k-差 ，如果是正数也需要交换，暂时不动
  // 1. 根据上面三种情况，如果都需要交换，first左移，three右移，步数为差值
  // 2. 如果 1 合适，2不合适，三合适，那就代表 three 太贴近 second 了，three 右移动
  let one = (arr[2] + arr[1]) % arr[0]
  let two = (arr[3] + arr[1]) % arr[0]
  let three = (arr[4] + arr[1]) % arr[0]

  let first = true
  let second = true
  let san = true
  // 一和二对比,不合适的情况
  if (one < arr[3]) {
    first = false
  }
  // 三和二对比,不合适的情况
  if (two < arr[4]) {
    first = false
  }
  // 一和三对比,不合适的情况
  if (three < arr[2]) {
    first = false
  }
  // 如果三种都不合适，第一个左移，第三个右移
  if (!first && !second && !san) {
    arr[2] = (arr[3] - arr[2] - one) % arr[0]
    arr[3] = (arr[3] + arr[2] - three) % arr[0]
    return 2
  } else {
    return 0
  }
}

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let nums = await readline()
  let num = parseInt(nums)
  let arrs = [] //存放一系列对象，有长度和数组
  let count = 0

  while (num-- > 0) {
    let length = await readline()
    let line = await readline()
    let tokens = line.split(' ')
    arrs.push({ length, arr: tokens })
  }
  arrs.forEach(item => {
    solute(item.arr)
  })
})()

const solute = arr => {
  let oldArr = arr
  let sortArr = arr.sort() //有效排序
  for (let i = 0; i < sortArr.length - 1; i++) {
    let cur = sortArr[i]
    let next = sortArr[i + 1]
    let curIndex = 0
    let nextIndex = 0
    oldArr.forEach((item, index) => {
      if (item === cur) {
        curIndex = index
      }
      if (item === next) {
        nextIndex = index
      }
    })
    // 比较两个index的差值，如果不是偶数就输出 NO
    if ((nextIndex - curIndex) % 2 == 0) {
      console.log('NO')
      return
    }
  }
  console.log('YES')
}

// 方法：
// 1. 先排序，每个数组
// 2. 接着对着原数组寻找 i 与 i+1 ，如果间隔双数，那就不管，如果不是双数，直接No

// 过啦！！！！

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split(',')
    let arr = tokens.map(item => parseInt(item))
    console.log(solute(arr))
  }
})()
const solute = arr => {
  if (arr.length === 0) {
    return 0
  }
  let result = 0
  // 用hash表记录长度分别为 1，3，5，.. 的总值
  for (let i = 1; i <= arr.length; ) {
    // i 表示哈希表的key
    // 内部用双指针，两个指针的差值长度等于 i 的值，用 尾指针 控制是否越界
    let slow = 0,
      fast = i
    while (fast <= arr.length) {
      //如果小于等于就继续循环，例如 5 的情况，尾部仍然要继续计算
      for (let j = slow; j < fast; j++) {
        result += arr[j]
      }
      // 加完一次，累加一下 slow 和 fast
      slow++
      fast++
    }
    // 最后i+2下一次循环
    i += 2
  }
  return result
}

// 思路
// 1. 首先是处理边界条件，为空
// 2. 其次先将单个的情况累加一遍，接着就遍历当前数组，将1，2+3，4+5...存到一个新的数组中；接着将 2，3+4 存到新数组中
// 3. 最后将多个新数组用两个 for 循环遍历一次，累加起来

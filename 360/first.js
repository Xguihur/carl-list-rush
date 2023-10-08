const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let nums = await readline()
  let num = parseInt(nums)
  let line = await readline()
  let tokens = line.split(' ')
  let arrs = tokens.map(item => {
    return parseInt(item)
  })
  // console.log(arrs)
  let cur = 1 //当前要找的值
  let day = 0 //天数
  let curArr = [] //当前拿到的钥匙
  let result = [] //输出结果的数组

  for (let i = 0; i < arrs.length; i++) {
    day++
    if (arrs[i] != cur) {
      // 没找到目标值
      curArr.push(arrs[i])
    } else {
      // 找到目标值
      result.push(day)
      cur++
      while (curArr.includes(cur)) {
        result.push(day)
        cur++
      }
    }
  }
  console.log(result)
})()

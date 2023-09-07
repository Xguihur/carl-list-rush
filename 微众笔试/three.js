// 1. 从头开始遍历获取所有的区间，存到一个数组中
// 2. 对这些区间进行求平均值，算出结果等于 目标值 则 result ++
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

const solute = (n, obj, arr) => {
  let result = 0
  let arrs = []
  // 先分区间
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cur = []
      for (let k = i; k < j; k++) {
        cur.push(arr[k])
      }
      arrs.push(cur)
    }
    // console.log(arrs)// 已经全部拿到
  }
  arrs.forEach(item => {
    let data = 0
    item.forEach(i => {
      data += i
    })
    // console.log(`输出一个区间的值`, data)
    const myObj = parseInt(data) / item.length
    console.log(`${data}/${item.length}`)
    if (myObj == obj) {
      result++
    }
  })
  return result
}

void (async function () {
  // Write your code here
  // let nums = await readline()
  // nums = nums.split(' ')
  // let n = Number(nums[0])
  // let obj = parseFloat(nums[1]) / parseFloat(nums[2])

  // let line = await readline()
  // let tokens = line.split(' ')
  // tokens = tokens.map(item => {
  //   return Number(item)
  // })
  console.log(solute(6, 2, [2, 4, 1, 3, 2, 3]))
  // console.log(solute(n, obj, tokens))
})()

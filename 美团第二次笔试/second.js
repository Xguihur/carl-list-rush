const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  // Write your code here
  let line = await readline() // n 和 m
  let tokens = line.split(' ')
  let n = parseInt(tokens[0])
  let m = parseInt(tokens[1])
  // 数组值
  const arr = []
  let data = await readline() // 数组
  let stringArr = data.split(' ')
  stringArr.forEach(item => {
    arr.push(parseInt(item))
  })
  // console.log(arr)
  // 执行核心函数，获取最终值
  const myResult = solute(n, m, arr)
  console.log(myResult)
  return myResult
})()

const solute = (n, m, arr) => {
  // 排个序
  arr.sort()
  // console.log(arr)
  // 根据 m 进行操作
  for (let i = 1; i <= m; i++) {
    // if(n==i){ n 不可能 等于 m 和 i
    //     break
    // }
    let a = arr[n - i]
    let b = arr[n - i - 1]
    arr[n - i] = 1
    arr[n - i - 1] = a * b
  }
  // 最后输出结果
  let result = 0
  arr.forEach(item => {
    result += item
  })
  return result
}

// 操作就是从数组中选两个数相乘，然后一个取 1，一个取 最大值
// 数组已排序，后面的数字大，且不考虑负数，那就从后面开始操作

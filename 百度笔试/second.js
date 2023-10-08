// 先获取一遍 ai - bi，正数的加在一起，负数的加在一起，比较这两个值，返回绝对值最大的

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let num = parseInt(line)
    let arrs1 = [] //存储点赞的数据
    let arrs2 = [] //存储点踩的数据
    let lines = await readline()
    let arr = lines.split(' ')
    arrs1 = arr.map(item => parseInt(item))

    let lines2 = await readline()
    arr = lines2.split(' ')
    arrs2 = arr.map(item => parseInt(item))

    // 开始执行核心代码
    // 用一个数组存储两个数组的差值
    const temp = []
    for (let i = 0; i < num; i++) {
      temp.push(arrs1[i] - arrs2[i])
    }
    // temp 为最终处理数组
    let lg = 0 //正数
    let lt = 0 //负数
    temp.forEach(item => {
      if (item > 0) {
        lg += item
      } else {
        lt += item
      }
    })
    if (lg > -lt) {
      console.log(lg)
    } else {
      console.log(-lt)
    }
  }
})()

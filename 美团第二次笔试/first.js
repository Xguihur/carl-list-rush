const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let line = await readline() // n 和 m
  let tokens = line.split(' ')
  let n = parseInt(tokens[0])
  let m = parseInt(tokens[1])
  // 每一次的具体操作
  const arr = []
  while (m-- > 0) {
    let operate = await readline() // t 和 x
    let data = operate.split(' ')
    let t = parseInt(data[0])
    let x = parseInt(data[1])
    arr.push({ t, x })
  }
  // console.log(arr)
  // 执行核心函数，获取最终值
  const result = solute(n, m, arr)
  console.log(result)
})()

const solute = (n, m, arr) => {
  if (n > m) {
    // 剪枝
    return -1
  }
  let repeat = 0 //重复变量
  let flag = m - n // 比较对象
  const hash = new Set() //hash表存放已遍历过的元素
  // // 开始遍历 有m次操作
  for (let i = 1; i <= m; i++) {
    const data = arr[i - 1]
    if (data.t === 1) {
      // 类型为1的情况
      if (hash.has(data.x)) {
        //判断是否重复操作
        repeat++
      } else {
        hash.add(data.x)
      }
    } else {
      // 类型为2的情况
      if (hash.has(data.x)) {
        //如果里面已经有 data.x 则此次操作表示完成，直接 return i
        return i
      } else {
        for (let j = 1; j <= n; j++) {
          if (j != data.x) {
            hash.add(j)
          }
        }
        repeat++
      }
    }
    // 根据临时变量判断
    if (i - n >= repeat) {
      return i
    }
    if (repeat > flag) {
      return -1
    }
  }
}

// 思路：
// 1. 只要m小于n，直接返回 -1 表示无论怎么操作也无法符合要求
// 如果 m 大于等于 n，那就需要看下面具体的操作步骤
// 记录 m-n 的值，使用 hash 记录 每一个 xi，如果 xi 已经存在，记录重复变量 +1

// 最终如果临时变量的值 大于 m-n+1 ，那就表示无法满足至少每一个都有小球
// 如果 当前操作次数 - n >= 重复变量，那表示所有的都至少有 1 个了，return m 就好。m 的循环用 <=m ，初始化为1

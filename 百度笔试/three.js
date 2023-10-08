const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let nums = line.split(' ')
    const n = parseInt(nums[0])
    const k = parseInt(nums[1])
    let arrs = [] //存储每一行的数据
    let lines = await readline()
    arrs = lines.split(' ')
    arrs = arrs.map(item => parseInt(item))
    // 开始执行核心代码
    // 记录 index
    const indexs = []
    arrs.filter((i, index) => {
      if (i === 1) {
        indexs.push(index)
      }
    })
    // 从这么多个index进行遍历处理
    let isresult = false
    for (let j = 0; j < indexs.length; j++) {
      let count = 0
      let bool = true
      let results = [] //需要交换的时候的值，第一个是 索引，第二个是目标值
      // 每一个 index 进行比较
      for (let i = 1; i < k; i++) {
        // 循环k次比较 索引为 item+1 和item+k-1 的值.
        if (arrs[indexs[j] + i] != i + 1) {
          count++
          console.log(indexs[j] + i, '', i + 1)
          results.push(indexs[j] + i)
          results.push(i + 1)
          // console.log(arrs[indexs[j] + i], '', i + 1)
        }
        if (count >= 2) {
          // 结束了，直接不合适
          bool = false
          break
        } else {
          // 合法的情况判断 count 是 1 还是 0
          if (count === 0) {
            // 直接成功
            isresult = true
            console.log('YES')
            console.log(0)
            break
          } else {
            break
          }
          // 为 1 的情况就直接退出就好
        }
      }
      // 循环结束，如果 bool 依然为 true 表示合法
      if (bool) {
        // 如果存在目标值，全局寻找那个下标需要的值
        for (let i = 0; i < arrs.length; i++) {
          console.log(results[0], ' ', i)
          if (arrs[i] === results[1]) {
            // 表示找到了
            isresult = true
            console.log('YES')
            console.log(1)
            console.log(results[0] + 1, '', i + 1)
            break
          }
        }
      }
    }

    // 最终，NO 的情况
    if (!isresult) {
      console.log('NO')
    }
  }
})()

// 1. 遍历1的个数并且记录下 index
// 2. 从这么多个 index 开始取后4个数，遇到一个不连续就 count++，如果count>=2就结束当前 index
// 3. 如果只有一个不连续，就全局索引找那个缺失的数字，找到了就输出结果，找不到就下一个 index，直到结束输出 NO.
// 4. 注意：最终输出的 index 要+1

// 一个数组，从中选出 1-k 的连续排列，最多交换一次数字，求最终值

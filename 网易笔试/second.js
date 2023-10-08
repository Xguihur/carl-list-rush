const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let nums = await readline()
  let num = parseInt(nums)
  let arrs = []
  let count = 0

  while (num-- > 0) {
    let line = await readline()
    let tokens = line.split('')
    arrs.push(tokens)
  }
  // 现在拿到了这些值
  arrs.forEach((item, index) => {
    // 对当前item使用 hash 获取值
    let set = {}
    item.forEach(item2 => {
      if (!set[item2]) {
        set[item2] = 1
      } else {
        set[item2] += 1
      }
    })
    // console.log(set)

    let i = index
    while (++i < arrs.length) {
      if (arrs[i].length === item.length) {
        let set2 = {}
        arrs[i].forEach(item2 => {
          if (!set2[item2]) {
            set2[item2] = 1
          } else {
            set2[item2] += 1
          }
        })
        // 拿到了另外一个的hash表 接下来对比
        // if (JSON.stringify(set) === JSON.stringify(set2)) {
        //   count++
        // }
        for (let i in set) {
          if (set[i] != set2[i]) {
            return
          }
        }
        count++
      }
    }
  })
  console.log(count)
})()

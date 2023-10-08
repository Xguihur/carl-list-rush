const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let num = parseInt(line)
    const arrs = [] //存储每一行的数据
    for (let i = 0; i < num; i++) {
      let lines = await readline()
      let arr = lines.split(' ')
      arrs.push(arr.map(item => parseInt(item)))
    }
    // 开始执行核心代码
    arrs.forEach(item => {
      if ((item[0] + item[1]) % 2 === 0) {
        console.log('NO')
      } else {
        console.log('YES')
      }
    })
  }
})()

// n+m 如果是偶数小红必败，如果是奇数小红必胜

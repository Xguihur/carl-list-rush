// 总结：
// 1. 排查不出问题的时候，快速用实际案例在本地 debug 找到问题（我知道循环倒数第二个忘记置空后一看时间没多少了就慌了，冷静下来就好了）
// 2. 最后一点时间也不能慌，冷静分析才是王道！

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split('') //字符串类型的数组
    const length = tokens.length //循环次数
    // 构建链表
    const chain = { value: 0, next: { value: tokens[0] } } //头节点
    let cur = chain.next
    for (let i = 1; i < tokens.length; i++) {
      cur.next = { value: tokens[i] }
      cur = cur.next
    }
    // 此时 chain 是头节点的链表构建完成
    console.log(solute(chain, length))
  }
})()

const solute = (chain, length) => {
  // 如果 length 是5，那就只需要换 4 次
  // 第一次直接获取一次
  let result = getResult(chain)
  // console.log(result)
  // 进行循环
  while (length > 1) {
    console.log('循环：', length)
    // 交换链表
    // 首先保存一下头节点的next
    // 接着遍历到尾节点，让它指向头节点的next
    // 最后头节点指向尾节点
    let cur = chain.next
    let real = cur
    // 寻找尾节点
    while (real.next.next) {
      real = real.next
    }

    // 开始交换 关键部位要冷静，给多一分钟冷静思考就好了！
    real.next.next = cur
    chain.next = real.next
    real.next = null
    // 此时 chain 就是新的链表，调用函数比较值，接着进行下一轮
    // console.log(getResult(chain))
    result = Math.max(result, getResult(chain))

    length--
  }
  return result
}

const getResult = head => {
  // 根据链表头节点来算出当前数字大小
  let data = ''
  while (head.next) {
    data += head.next.value
    head = head.next
  }
  return parseInt(data)
}

// 思路：
// 1. 涉及到往后移动一位，可以考虑构建链表来实现
// 2. 用一个值存放最大值，有几位数就链表操作几次，也就是比较几次大小，取最大的那次就好
// 3. 先获取到循环的次数，再构造交换的方法每次循环就好，最后返回最大的

// 这道滑动窗口题倒在了字符转化为数字，原来用户输入的值是默认变成 字符 的，即使是那个 num 也是一样

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  num = await readline() //输入一个数
  line = await readline() //输入一个数组，用‘ ’分隔
  let tokens = line.split(' ')
  // tokens.forEach(item => {
  //   item = Number(item)
  // })
  //   执行函数求值
  // solute(num,tokens)
  console.log(solute(num, tokens))
})()

const solute = (num, arr) => {
  // 用双指针模拟滑动窗口，start 和 end
  let start = 0
  let end
  let result = [-1] //结果
  let length = 0 //长度
  for (end = 0; end < arr.length; end++) {
    // 当第一次遇到数字就是目标值时保存一下索引
    if (arr[end] === num && length === 0) {
      length = 1
      result = [end, end]
      continue
    }
    // 当 end 直接大于 num 了，开始和结束的直接从 end+1 开始计算
    if (arr[end] > num) {
      start = end + 1
      continue
    }
    // 当 之和 等于目标值时，比较长度，大于则记录下来
    let cur = 0
    for (let mStatr = start; mStatr <= end; mStatr++) {
      // 需要将字符转化为数字，因为用户输入的是字符类型的
      cur += Number(arr[mStatr])
    }
    console.log(cur)
    // 如果和大于目标值，起始点向后移动一位，end 向左移动一位，因为要保持不变再比一次
    if (cur > num) {
      start += 1
      end -= 1
      continue
    }

    // 当值相等且长度也大于时记录下来
    // 不能用三等，因为用户输入转进来是字符串，需要处理为数字
    if (cur == num && end - start + 1 > length) {
      length = end - start + 1
      result = [start, end]
    }
    // console.log('判断：', cur == num)
    // 无论是等于还是小于，end都继续向后移动，考虑 为0 的情况,start 保持不变
  }
  return result
}

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 卡尔的思想是使用双指针法！(左指针指向旧数组长度的末尾，右指针指向新数组长度的末尾！这样能保证两个指针相遇的时候空格都被处理完了，空格替换需要的空间能够被控制在两个指针之间)
// 并且还有一个很巧妙的方式，是先确定替换后的数组长度是多少，然后再从后往前进行双指针遍历

// 这么做有两个好处：
// 不用申请新数组。
// 从后向前填充元素，避免了从前向后填充元素时，每次添加元素都要将添加元素之后的所有元素向后移动的问题。

/**
 * @param {string} s
 * @return {string}
 */

// const ghIn = require('../input.js')
import ghIn from '../input.js'

var replaceSpace = function (s) {
  // 将字符串转化为数组
  const arr = Array.from(s)
  // const arr = s.split('')
  const len = arr.length
  let count = 0

  // 循环获取替换后的数组长度
  for (let i of arr) {
    if (i === ' ') {
      count++
    }
  }
  // 定义左指针和右指针
  let left = len - 1
  let right = len + count * 2 - 1
  // 开始循环 退出条件是左指针小于0
  while (left >= 0) {
    if (arr[left] !== ' ') {
      arr[right--] = arr[left--]
    } else {
      arr[right] = 0
      arr[right - 1] = 2
      arr[right - 2] = '%'
      left--
      right -= 3
    }
  }
  // 输出结果
  console.log(arr.join(''))
  return arr.join('')
}

// const data = replaceSpace('guihur')
ghIn('请输入一个字符串：', replaceSpace)

// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// import ghIn from '../input'
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length
  const arr = s.split('')

  // 循环数组，每次循环+2k，最终固定一段一段相同规律的，可以从 for 循环的 位置入手
  for (let i = 0; i < len; i += 2 * k) {
    // 这里的 left 取 i-1 和while中的右边界有关，十分注意！！！有些绕，搞明白来
    // 使用 双指针 实现反转，然后需要处理一下 k 的特殊情况
    let left = i - 1
    let right = i + k > len ? len : i + k //处理最后不足 k 个的情况。大于k小于2k的一样处理问题不大
    let temp

    while (++left < --right) {
      // 开始翻转
      temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
    }
  }
  // return arr//最终结果要求是字符串
  return arr.join('')
}
const data = reverseStr('abcdefghijklmn', 5)
console.log(data)

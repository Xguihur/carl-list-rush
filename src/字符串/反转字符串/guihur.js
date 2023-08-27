// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 使用双指针进行解题
// 当左边的指针小于右边的指针则继续循环
// 奇数：两个指针相等则表示不需要再交换了，因为到中间了
// 偶数：左指针大于右指针

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = -1
  let right = s.length
  let temp

  while (++left < --right) {
    console.log('循环')
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    console.log(s)
  }
  // console.log(s) //用例能过为啥node上字符串没有改变
}
reverseString('asdfg')
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin
// })
// console.log('请输入字符串：')
// rl.on('line', data => {
//   // 用空隔分割
//   const list = data
//   reverseString(list)
//   process.exit(0)
// })

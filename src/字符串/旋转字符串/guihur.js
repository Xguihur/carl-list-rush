// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

// 题解的方法是使用一个额外的数组空间进行切割，卡尔的方法是在一个字符串中O（1）的空间复杂度，使用局部翻转+全部翻转实现
// 题解看不太懂：
// var reverseLeftWords = function (s, n) {
//   const length = s.length
//   let i = 0
//   while (i < length - n) {
//     s = s[length - 1] + s
//     i++
//   }
//   // 解析：
//   // 每次循环都把数组动态变长一位，这在内存中的处理是不断开辟空间，极其浪费性能。最后使用 slice 拷贝一份出去
//   // 1. s=gabcdefg
//   // 2. s=fgabcdefg
//   // ...
//   // 5. s=cdefgabcdefg

//   return s.slice(0, length)
// }
// console.log(reverseLeftWords('abcdefg', 2))

// O(1) 空间复杂度的方法：(这个方法少了一个字符串转数组的操作，导致reverse函数里面没办法像数组一样翻转)
// const reverseLeftWords = function (s, n) {
//   // 局部翻转（左右两边都局部翻转），最后全局反转
//   reverse(s, 0, n - 1)
//   reverse(s, n, s.length - 1)
//   reverse(s, 0, s.length - 1)
//   return s
// }
// const reverse = (s, left, right) => {
//   // 左闭右闭，不是一个纯函数，没有返回值

//   let l = left
//   let r = right
//   let temp
//   while (l < r) {
//     console.log(l, r)
//     temp = s[l]
//     s[l++] = s[r]
//     s[r--] = temp
//   }
//   // console.log(s)
// }
// console.log(reverseLeftWords('abcdefg', 2))

// 最终版：
const reverseLeftWords = function (s, n) {
  // 局部翻转（左右两边都局部翻转），最后全局反转
  const arr = Array.from(s)
  reverse(arr, 0, n - 1)
  reverse(arr, n, arr.length - 1)
  reverse(arr, 0, arr.length - 1)
  return arr.join('')
}
const reverse = (s, left, right) => {
  // 左闭右闭，不是一个纯函数，没有返回值

  let l = left
  let r = right
  let temp
  while (l < r) {
    temp = s[l]
    s[l++] = s[r]
    s[r--] = temp
  }
  // console.log(s)
}
console.log(reverseLeftWords('abcdefg', 2))

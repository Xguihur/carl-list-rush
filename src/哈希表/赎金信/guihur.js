// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 提示：
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成

// 思路：
// 1. 看到这个题目就知道用哈希表来实现，从一个表中查找特定数据
// 2. 又因为可以都为小写字母，于是想到用数组作为哈希表

// 我想尝试手动输入测试用例，通过 readline 模块配合字符串分割获取到了两个参数，在内部调用即可

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 使用数组做为哈希表，首先将要初始化一个全为0的长度为26的数组
  const baseArr = new Array(26).fill(0)
  // 其次将 a 的ascll码记录下来方便使用
  const basePosition = 'a'.charCodeAt()
  // 进行操作
  let index = 0 //用于循环时记录当前字母对应数组中的位置
  for (const i of magazine) {
    baseArr[i.charCodeAt() - basePosition]++
  }
  // 开始对比
  for (const i of ransomNote) {
    index = i.charCodeAt() - basePosition
    if (baseArr[index] <= 0) {
      return false
    }
    baseArr[index]--
  }
  // 循环结束，匹配成功，返回 true
  return true
}
// 测试
// const ransome = 'guihur'
// const magezine = 'xuguihur'
// const magezine2 = 'xuguihua'
// console.log(canConstruct(ransome, magezine2))
// const main =  () => {
//   const readline = require('readline')
//   const rl = readline.createInterface({
//     input: process.stdin
//   })
//   let ransome
//   let magezine
//   new Promise((resolve, reject) => {
//     console.log('请输入赎金信（字符串形式）：')
//     rl.on('line', data => {
//       ransome = data
//       // process.exit(0)
//     })
//     console.log('请输入杂志（字符串形式）：')
//     rl.on('line', data => {
//       magezine = data
//       process.exit(0)
//     })
//   }).then(() => {
//     // 执行函数
//     canConstruct(ransome, magezine)
//   })
// }
// 执行main
// main()

// 测试2
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin
})
console.log('请输入赎金信与杂志（用空格分割）：')
rl.on('line', data => {
  // 用空隔分割
  const list = data.split(' ')
  // console.log(list)
  console.log(canConstruct(list[0], list[1]))
  process.exit(0)
})

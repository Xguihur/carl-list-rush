/**
 * @param {string} s
 * @return {string}
 */
let s = 'abc bba cds'
var replaceSpace = function (s) {
  // 使用 字符串 的 原型方法 replace 实现正则替换
  return s.replace(/ /g, '20%') // 学会怎么使用 正则表达式
}
console.log(replaceSpace(s))

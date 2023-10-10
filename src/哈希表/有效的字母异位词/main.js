const s = 'rat'
const t = 'car'
var isAnagram = function (s, t) {
  const arr = new Array(26).fill(0) // 1
  for (let i of s) {
    // 直接 i 就是 value，遍历字符串很ok
    // 很关键的是 charCodeAt() 这个函数，用来将字符串转化为 ascll 的
    arr[i.charCodeAt() - 'a'.charCodeAt()]++
  }
  for (let i of t) {
    arr[i.charCodeAt() - 'a'.charCodeAt()]--
  }
  for (let i of arr) {
    if (i != 0) {
      return false
    }
  }
  return true
}
console.log(isAnagram(s, t))

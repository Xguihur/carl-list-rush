/**
 * @param {string} s
 * @return {string}
 */
let s = 'abc bba cds'
var replaceSpace = function (s) {
  // 不要忘了字符串转数组
  let arr = s.split('')
  // 获取长度
  let size = 0
  for (let i of arr) {
    if (i === ' ') {
      size += 3
    } else {
      size++
    }
  }
  let left = arr.length - 1
  let right = size - 1
  // 遍历替换值
  for (left; left < right; left--) {
    // 这里使用 left < right 作为循环条件，算是一个剪枝了
    if (arr[left] === ' ') {
      arr[right--] = '0'
      arr[right--] = '2'
      arr[right--] = '%'
    } else {
      arr[right--] = arr[left]
    }
  }
  return arr.join('')
}
console.log(replaceSpace(s))

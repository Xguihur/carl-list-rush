const s = 'abcdefg'
const k = 2
var reverseStr = function (s, k) {
  s = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k < s.length) {
      //反转字符串
      let l = i - 1,
        r = i + k
      while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
    } else {
      let l = i - 1,
        r = s.length
      while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
    }
  }
  return s.join('')
}
console.log(reverseStr(s, k))

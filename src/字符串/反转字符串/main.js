let s = 'abcdefg'
var reverseString = function (s) {
  let l = -1,
    r = s.length
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
  console.log(s)
}
reverseString(s)

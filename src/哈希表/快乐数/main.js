let n = 19
const getNum = n => {
  let sum = 0
  while (n > 0) {
    // 当 n = 0 时退出循环
    sum += (n % 10) ** 2
    n = Math.floor(n / 10) //注意 js 中除法包含小数，不会自动向下取整的
  }
  return sum
}
var isHappy = function (n) {
  const set = new Set()
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = getNum(n)
  }
  return n === 1
}
console.log(isHappy(n))

function foo(start, end) {
  let arr = []
  if (end) {
    while (start < end) {
      arr.push(start)
      start++
    }
    return arr
  } else {
    return function (end) {
      console.log(start)
      console.log(end)
      return foo(start, end)
    }
  }
}
console.log(foo(1)(5))

function matchesPattern(str) {
  const arr = str.split('-')
  // console.log(arr)
  if (arr[0] < 100 || arr[0] > 1000) return false
  if (arr[1] < 100 || arr[1] > 1000) return false
  if (arr[2] < 1000 || arr[2] > 10000) return false
  return true
  // if (Array.from(arr[0]).length !== 3) return false
  // if (Array.from(arr[1]).length !== 3) return false
  // if (Array.from(arr[2]).length !== 4) return false
  // return true
}
matchesPattern('100-200-1889')

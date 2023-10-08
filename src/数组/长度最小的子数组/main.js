let target = 7
let nums = [2, 3, 1, 2, 4, 3]
var minSubArrayLen = function (target, nums) {
  let head = (tail = 0) // 表示下标
  let result = nums.length + 1 // 表示最终结果
  let sum = 0 // 表示窗口值
  for (tail; tail < nums.length; tail++) {
    sum += nums[tail]
    while (sum >= target) {
      result = Math.min(result, tail - head + 1)
      sum -= nums[head]
      head++
    }
  }
  if (result > nums.length) {
    return 0
  }
  console.log(result)
  return result
}
minSubArrayLen(target, nums)

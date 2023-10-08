let nums = [-5, -3, 0, 2, 4, 6]
var sortedSquares = function (nums) {
  let head = 0 // 只是下标
  let tail = nums.length - 1
  let newArr = []
  while (head <= tail) {
    if (nums[head] ** 2 > nums[tail] ** 2) {
      newArr.push(nums[head] ** 2)
      head++
    } else {
      newArr.push(nums[tail] ** 2)
      tail--
    }
  }
  return newArr
}
sortedSquares(nums)

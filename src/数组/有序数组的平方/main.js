// 验证一些数组方法
let nums = [-5, -3, 0, 2, 4, 6]
var sortedSquares = function (nums) {
  nums.forEach((item, index, arr) => {
    arr[index] = item * item
  })
  nums.sort() // 这个sort 方法是会修改原数组的
  console.log(nums)
  return nums
}
sortedSquares(nums)

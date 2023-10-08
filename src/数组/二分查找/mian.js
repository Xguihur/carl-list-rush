let nums = [-1, 0, 3, 5, 9, 12]
let val = 9
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2) // 还可以使用：left+(right-left)/2 ，这两个的 /2 都是向下取整的    这里的 mid 是下标值，而不是数值，这需要注意
  while (left <= right) {
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
      mid = Math.floor((left + right) / 2)
    } else {
      //nums[mid]<=target
      left = mid + 1
      mid = Math.floor((left + right) / 2)
      console.log(mid)
    }
  }
  return -1
}
search(nums, val)

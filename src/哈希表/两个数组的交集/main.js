/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [1, 2, 3, 4, 5]
const nums2 = [10, 8, 6, 4, 2, 1]
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1)
  const resSet = new Set()

  for (let i of nums2) {
    // 普通 for 循环效率会比 迭代器高，如果追求效率可以使用普通 for 循环
    if (nums1Set.has(i)) resSet.add(i)
  }

  return Array.from(resSet) // 类数组转化为数组的方法
}
intersection(nums1, nums2)

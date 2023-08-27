// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入 只会对应一个答案（意味着找到一对就可以 return 了）。但是，数组中同一个元素不能使用两遍。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 解题方法：
// 1. 通过遍历数组，将元素存起来，如果当前元素与存起来的其中一个元素加起来等于目标元素，那么就返回他们的下标！
// 2. 因为要 快速的查找到某一个元素，所以会想到用哈希表！然后因为要获取元素值与下标值，涉及两个元素，于是使用 map 而不用 set！
// 3. JavaScript 的 map 实际上就是 对象 {}！有 key 有 value

var twoSum = function (nums, target) {
  const hash = {} //设置一个map哈希表
  for (let i = 0; i < nums.length; i++) {
    // 如果 target - nums[i] 的值在哈希表中找得到那就说明匹配成功！
    // if(hash[target - nums[i]])//是不行的！因为一旦这样获取了key就相当于创建了属性，它就存在了，值为undefined，然后就不执行了不知道为啥！直接循环结束返回 undefined。结果是循环结束都没有执行一次if
    if (hash[target - nums[i]] !== undefined) {
      // 不等于 null 和 不等于 undefined 都可以！但是结果可能包含 undefined 的！很神奇！明明key存在，value 也不为空，还是不执行 if 语句，除非手动判非空
      console.log('找到啦')
      return [hash[target - nums[i]], i] //返回hash 表中对应的下标与当前元素对应的下标
      // return 1 //返回hash 表中对应的下标与当前元素对应的下标
    } else {
      // 哈希表中没有找到匹配的，将此元素与下标存入哈希表中
      hash[nums[i]] = i
      // console.log(hash)
    }
  }
}

const list = [2, 7, 11, 15]
console.log(twoSum(list, 9))

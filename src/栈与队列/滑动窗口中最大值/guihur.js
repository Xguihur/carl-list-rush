// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。

// 实现以下单调栈这个数据结构
class MonoQueue {
  queue // 单调栈
  constructor() {
    this.queue = []
  }
  // 新增
  enqueue(value) {
    // 关键代码，从小到大一个个比对，将不可能为最大值的元素弹出
    let back = this.queue[this.queue.length - 1]
    // 可以循环也可以递归哈哈哈 互相转化，我用循环
    while (value > back) {
      this.queue.pop()
      back = this.queue[this.queue.length - 1]
    }
    // 最后 push 当前的 value 就好
    this.queue.push(value)
  }
  // 删除
  dequeue(value) {
    const frontData = this.front()
    if (frontData === value) {
      this.queue.shift() //bug：之前这里用的是 unsjift，实际上应该用 shift。但是为什么前面21个用例能过？解答：因为之前的用例的结果都是递增的，也就是其实单调栈中没有删掉那些应该被删除的元素，但是因为后面加进来的元素都比之前的大，就能正常通过用例。
    }
    // 不相等的话不用管
  }
  // 查询
  front() {
    return this.queue[0]
  }
}

// 实现算法要求
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = new MonoQueue()
  let i = 0,
    j = 0
  const resultArr = []
  // 第一遍先生成窗口，并且选出最大的先
  while (j < k) {
    //bug：这里原本 是 j++ < k ,这样是不对的，这样无论如何 j 也是先递增再与k对比，应该放到下面 j++ 再说
    queue.enqueue(nums[j++])
  }
  resultArr.push(queue.front()) //尾指针同时还判断循环结束，头指针也同时表示经历的窗口个数（即结果数组的长度-1）
  // 第二遍开始就是循环了,每次向前移动一格
  while (j < nums.length) {
    // 窗口移动，同时管理单调栈中的数据
    queue.enqueue(nums[j])
    queue.dequeue(nums[i])
    // 从单调栈中取最大值存入结果数组
    resultArr.push(queue.front())
    i++, j++
  }
  return resultArr //最后输出结果
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 3, 2, 3], 3)) //[ 3, 3, 5, 5, 6, 6, 6, 6]：验证unshift为什么能过的用例
// console.log(maxSlidingWindow([1, -1], 1))

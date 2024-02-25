function answer(x) {
  // 第一小问
  // x 是数组
  if (x.length < 2) return 0
  // 双指针
  let left = 0
  let right = x.length - 1
  let maxArea = 0
  // 循环
  while (left < right) {
    const minheight = Math.min(x[left], x[right])
    const curArea = minHeight * (right - left)
    maxArea = Math.max(maxArea, curArea)

    // 循环条件,保证 高度取最高的
    if (x[left] < x[right]) {
      left++
    } else {
      right--
    }
  }
  // return maxArea
  // 调用第二小问的函数
  second(maxArea)
}
// 第二小问的方法
function jiecheng(n) {
  if (n == 0) return 1

  // 先求出阶乘
  if (n < 0) {
    n *= -1
  }
  let result = 1
  for (let i = 2; i <= n; i++) {
    // 可以不用从1开始，因为没啥变化
    result *= i
  }
  return result
}
function second(n) {
  const num = jiecheng(n) // 获取阶乘
  const yueshu = [] // 约数
  for (let i = 1; i <= num; i++) {
    yueshu.push(i)
  }
  // return yueshu.slice(0,5)// 返回最终的结果数组
  // 调用 第三小问 的函数
  three(yueshu.slice(0, 5))
}

// 第三小问
function three(arr) {
  const n = arr.length // 获取长度新建数组
  const B = new Array(n)
  //计算 arr 中的所有值的和，最后每个 bi 再减去它对应的值乘2
  let totalSum = arr.reduce((sum, value) => sum + value, 0)
  for (let i = 0; i < n; i++) {
    B[i] = (totalSum - arr[i]) * 2
  }
  return B
}

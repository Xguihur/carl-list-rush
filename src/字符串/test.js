function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals
  }

  // 按照区间的起始点进行排序
  intervals.sort((a, b) => a[0] - b[0])

  const merged = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i]
    const lastMerged = merged[merged.length - 1]

    if (currentInterval[0] <= lastMerged[1]) {
      // 当前区间的起始点小于等于上一个合并区间的结束点，合并区间
      lastMerged[1] = Math.max(lastMerged[1], currentInterval[1])
    } else {
      // 没有重叠，添加新的区间
      merged.push(currentInterval)
    }
  }

  return merged
}

// 示例
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]

console.log(mergeIntervals(intervals)) // 输出合并后的区间

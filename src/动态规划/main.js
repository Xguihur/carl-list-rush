/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0]
  for (let i = 2; i <= cost.length; i++) {
    // 这个 i 的含义需要理解一下，是 cost 数组的下标
    dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    console.log(dp[i])
  }
  console.log(dp[dp.length - 1])
  return dp[dp.length - 1]
}
const min = function (a, b) {
  if (a > b) {
    return b
  } else {
    return a
  }
}
minCostClimbingStairs([10, 15, 20])

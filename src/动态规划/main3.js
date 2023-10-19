const max = function (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
var integerBreak = function (n) {
  const dp = []
  dp[2] = 1
  // 不考虑 j=0，因为不用拆分 0 的情况
  // i 从3开始遍历，这样 dp[i-j] 最初就是 dp[2]
  // j<i-1,因为j=i-1 的情况得到的 i-j 就是 1，这种情况不用算也行，那这样算的话 j<i/2 就好了，后面都开始重复了呢
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = max(j * (i - j), dp[i - j] * j)
    }
  }
  return dp[n]
}

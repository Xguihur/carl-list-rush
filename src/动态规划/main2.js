// var uniquePaths = function (m, n) {
//   //初始化
//   const dp = new Array(m).fill().map(item => new Array(n).fill(1))
//   // 遍历填充值
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
//     }
//   }
//   return dp[m - 1][n - 1]
// }
// console.log(uniquePaths(2, 3))

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  //参数 obstacleGrid 是带有障碍物的一个二维数组，那我们也不用自己创建这么麻烦了
  // 剪枝，石头在终点------- 不一定要剪枝
  // if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0
  //初始化
  for (let i = 0; i < obstacleGrid.length; i++) {
    // 判断是不是有障碍物，如果没有则初始化为1，如果有障碍物就赋值为0，并且终端循环，后续全为0
    // 判断障碍物是根据传入的数组中是否有 1 的值得出结论
    if (obstacleGrid[i][0] === 1) {
      obstacleGrid[i][0] = 0
      // 后续都赋值为0
      while (++i < obstacleGrid.length) {
        obstacleGrid[i][0] = 0
      }
      break
    } else {
      obstacleGrid[i][0] = 1
    }
  }
  //这里有一个细节：如果j从 0 开始遍历的化，因为被 i 初始化过为1 了，所以这里会 break，所以 j 的位置要从 1 开始！！！，这个没有考虑到但是通过很棒的 debug 找到了问题，太棒了！
  if (obstacleGrid[0][0] === 0) {
    let j = 0
    while (j < obstacleGrid[0].length) {
      obstacleGrid[0][j] = 0
      j++
    }
  } else {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      // 一个问题，如果第一行第一个就是石头，后面就不需要再处理了，因为后面都是0如果处理反而会出问题
      // 那怎么知道第一行第一个是不是石头呢？判断它是不是为 0 ，如果是的话就说明它是从石头的1重新赋值为 0的
      if (obstacleGrid[0][j] === 1) {
        obstacleGrid[0][j] = 0
        // 后续都赋值为0
        while (++j < obstacleGrid[0].length) {
          obstacleGrid[0][j] = 0
        }
        break
      } else {
        obstacleGrid[0][j] = 1
      }
    }
  }
  // 遍历赋值
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[i].length; j++) {
      //这里处理的 [i][j] 都是没有遍历过的，也就是当前值是传入数组的值，就根据 值是否为 1 判断也没有障碍物
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
        continue
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
}
uniquePathsWithObstacles([[1, 1]]) // 这种情况又报错了，第一行碰到石头后，后续要初始化为0，不能不管他，因为默认不一定为0
// uniquePathsWithObstacles([[1, 0]])
// uniquePathsWithObstacles([
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ])
//模拟推导：第一遍：[1,1,1][1,0,1][1,0,0]   第二遍：[1,1,1][1,0,1][1,1,2]

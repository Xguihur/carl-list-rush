

# 基础问题

## 斐波那契数列

### [LeetCode 题目](https://leetcode.cn/problems/fibonacci-number/)

`斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是： F(0) = 0，F(1) = 1 F(n) = F(n - 1) + F(n - 2)，其中 n > 1 给你n ，请计算 F(n) 。` 

**动态规划五部曲**

1. 确定 `dp` 数组以及下标的含义（通常用于确定循环时的边界确认，蛮重要的）
2. 确定递推公式
3. `dp` 数组如何初始化
4. 确定遍历顺序（从前往后还是从后往前）
5. 举例推导 `dp` 数组（取一个值进行推演数列，用于验证结果 debug）

**三种方法**

1. 根据 五部曲 的思想编码，一步一步得到结果，同时也得到一个完整的数组
2. 优化以上的思想，不需要记录遍历过的结果，只需要最终的答案即可。交换两个元素即可
3. 使用 递归 的方式 实现本题（暂时还没用上 递归 三部曲，还是硬写的）

> 解题思路

**原始方法(ts:O(n,1))**

1. 根据五部曲，得到从前往后的顺序，结合递推公式，进行初始化元素
2. 使用 for 循环 进行递推公式遍历，直到找到目标元素
3. 返回目标元素
4. 举例数组（0，1，1，2，3，5，8，13，21，34，55）

```javascript
var fib = function(n) {
    if(n<2) return n
	let dp = [0,1]
    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[dp.length-1]
};
```

**优化方法(ts:O(n,1))**

1. 不需要使用一个数组记录已经遍历过的元素，用两个值记录前一个和前两个即可，然后一直交换
2. 交换涉及到临时变量

```javascript
var fib = function(n){
    if(n<2) return n
    let pre0 = 0
    let pre1 = 1
    let temp 
    for(let i=2;i<=n;i++){
        temp = pre0+pre1
        pre0 = pre1
        pre1 = temp
    }
    return pre1
}
```

**递归方式(ts:O(n^2,n)**

1. 递归三部曲：
   1. 确定递归参数和返回值：参数是 n ，返回值 是 dp 的值，即 前两个相加 或 0，1
   2. 确定退出递归条件：n 为 0或1 的情况，将值返回
   3. 确定循环体代码：判断是否为 0、1，否则 返回 前两者的 dp 值的和
2. 有了递推公式后，写递归也十分清晰了不少

```javascript
var fib = function(n){
    if(n<2) return n
    return fib(n-1)+fib(n-2)
}
```

---

> 总结

1. 五部曲的作用在实践后知道了用意是什么
   1. 比如第一步确定 下标 实际意义是在循环的时候确定边界条件
   2. 递推公式和初始化不用说了，遍历顺序是决定了用什么思想去写代码
   3. 最后的举例也是让自己编码的的时候也更好的整理思路和debug时验证
2. 写的时候还是有些粗心，初始化、边界条件、起始循环位置、返回值 都有些差错，得注意一下



## 爬楼梯

### [LeetCode 题目](https://leetcode.cn/problems/climbing-stairs/)

`假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数。`

**发现规律后就知道，这实际上就是斐波那契数列！**

1. 推演一下几个例子找到规律，n=1，n=2，n=3 的时候有几个答案
   1. 规律为 ，第 n 个台阶可以被 n = n-1 时的方法数得出，也能有 n=n-2 时的方法数 得出
2. 接下来就 动态规划 五部曲
   1. dp[i]的含义 : 第 i 个台阶有 dp[i] 种方法爬到
   2. 找到递推公式：dp[i] = dp[i-1] + dp[i-2]
   3. 初始化：dp[0] =0,dp[1] = 1,dp[2] = 2
   4. 遍历顺序：从前往后
   5. 列举一些例子：0,1,2,3,5,8,13,21

> 解题思路

**实际上就是斐波那契数列，只是 dp[0] 可以不考虑罢了，或者说为0，于是只用正常思维的方法解题，其余不去重复**

1. 初始化两个变量用于交换，还有一个临时变量
2. 确定好 i 的值后，进行 for 循环遍历
3. 在循环内部不断交换获取新值即可

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<3) return n//剪枝一下，n = 1，2 时，值也为 1，2 。 实际上 n = 3 也能剪枝的，但为了题目的题意合理性，就不做这样的剪枝，保持解题思路的清晰即可
	let pre1 = 1
    let pre2 = 2
    let temp
    for(let i=3;i<=n;i++){
        temp = pre1+pre2
        pre1 = pre2
        pre2 = temp
    }
    return pre2
    
};

```

> 总结

1. 发现做这个题目，掌握了 递推公式 找到规律后会非常方便，解题也更容易发现本质！一开始看着很难，但实际上和斐波那契就是一样的，做数学题一样
2. 掌握了 dp 五部曲确实对于解题非常高效，继续练习
3. 适当的剪枝取舍是需要技巧的，这点在做完题目熟悉了后不断优化即可



## 使用最小花费爬楼梯

### [LeetCode 题目](https://leetcode.cn/problems/min-cost-climbing-stairs/)

`给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。`

`你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。请你计算并返回达到楼梯顶部的最低花费。`

**题意分析**

1. 可以从 0 或 1 的下标开始往上爬，并且需要支付当前位置上的 体力花费，每次可以选择爬 一层 或者 两层
2. 求爬到第 n 层 的最低体力花费，到达 第 n 层 有两种体力花费，取两者最小值即可：
   1.  到达 n-1 层的体力花费+支付他那层的花费到达 n 层
   2.  到达 n-2 层的体力花费+支付他那层的花费到达 n 层
3. 有一个 cost 数组表示体力花费了，但是做 dp 题还需要一个 dp 数组存储遍历后的结果，所以写的时候要弄一个 dp 数组，并且表示 dp[i] 的意思

> 解题思路

1. dp 五部曲

   1. 建立 dp 数组，并且确立 dp[i] 的含义：到达第 i 层楼梯所花费的体力
   2. 递推公式：dp[i] = min(dp[i-1]+cost[i-1] , dp[i-2]+cost[i-2])
   3. 确定初始化参数：dp[0] = 0,dp[1 ] = 0 ,表示到达 第0层和第1层不需要花费体力
   4. 确定遍历顺序：很明显dp[i] 是依赖于 前两个 楼层花费的体力值总和得到的最小值，所以 从前往后 遍历即可
   5. 举例推导 dp 数组：
      1. 假设 cost 数组为：[1,100,1,1,1,100,1,1,100,1]
      2. 那么推导得到的 dp 数组为：[0,0,1,2,3,4,5,6] ，即 到达顶层需要 dp[6] = 6 个体力值为最优
   6. 这五部曲很多细节都包括在里面了，能避免走很多弯路，慢慢学习

   ```javascript
   /**
    * @param {number[]} cost
    * @return {number}
    */
   var minCostClimbingStairs = function(cost) {
   	const dp = [0,0]
       for(let i=2;i<=cost.length;i++){// 这个 i 的含义需要理解一下，是 cost 数组的下标,注意循环条件是 小于等于 
           dp[i] = min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
       }
       return dp[cost.length-1]
   };
   const min = function(a,b){
       if(a>b){
           return b
       }else{
           return a
       }
   }
   
   ```

   > 总结

   1. 写的时候在循环时 的 i 又有点忘记了含义，得想想才知道是对应 cost 的数组，做题过程得清晰知道 dp 数组表示的是什么意思，不然容易蒙了！！！知道后就不会太乱，能正常写出逻辑
   2. 循环的退出条件没有掌握好，要到 楼梯顶层，也就是跳出数组，边界要搞好，得思考一下
   3. 五部曲还不太熟，慢慢锻炼，每一次写都有新的感受

## 不同路径

### [LeetCode 题目](https://leetcode.cn/problems/unique-paths/)

`一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。问总共有多少条不同的路径？`

**题意分析**

1. 读了这个题目，一开始想的是类似于二叉树，想用二叉树的方式进行深度遍历，但还有很多细节没办法一下想到就暂停了这个思路
2. 接着想着和之前 dp 题一样从结果看看规律，然后就发现了终点的路径个数是由 上面和左边 的路径数加起来的，于是就找到了递推公式 dp\[i][j] = dp\[i-1][j] + dp\[i][j-1]

> 解题思路

1. 递归五部曲
   1. dp\[i][j] 的含义：表示到 第 i 行 j 列的路径数有 的 dp\[i][j] 条
   2. 递推公式： dp\[i][j] = dp\[i-1][j] + dp\[i][j-1]
   3. 初始化：
      1. 可以找到规律，最顶上一层和最左侧一列只能有一种方式达到，于是把这些都初始化为 1 即可
      2. 接着从第二行开始 从左到右 遍历填值就好了，最后就能得到 终点的路径
   4. 遍历顺序：从前往后遍历是正常操作，但这题或许也能用递归，暂时还不太会，有机会感受一下
   5. 举例推导：

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  //初始化
  const dp = new Array(m).fill().map(item => new Array(n).fill(1))
  // 遍历填充值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }
  return dp[m - 1][n - 1]
}
```



> 总结

1. JS 定义二维数组以及初始化不太会
   1. 看了题解学了一个方法是使用 **new Array** 的方式初始化，结合 **fill 函数**以及 **map 函数**初始化数组
2. 这道题递推公式结合之前的经验好找，但初始化也还没有自己发现规律，这个也是需要注意锻炼的地方，初始化也有讲究
3. 写到后面遍历填充的时候有一些懵了不知道咋填充，二维数组的题目做的还是比较少，还得练练
4. 题解还有深搜、数论的方法，但是我就没看了，目前锻炼 dp 的技巧即可，看看深搜的还可以，毕竟是树值得学习



## 不同路径 II

### [LeetCode 题目](https://leetcode.cn/problems/unique-paths-ii/)

`一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？`

**题目分析**

1. 这题和上一题就是多了个障碍物，一开始确实蒙了不知道咋写觉得好复杂，但看了题解瞬间感觉很有道理
2. 多了个障碍实际上就表示他那个位置值为0即可，这样一样的累加方法也算不上路径
3. 还有一个需要注意的是在初始化的时候，最上一层或者最左一列，只要有障碍，它以及它后面的都到达不了了，只能为0
4. 在遍历赋值的时候不仅判断小于 m || n，还要判断当前的位置是不是障碍物的位置，如果是障碍物的位置就赋值为0，否则就走之前的递推公式逻辑

> 解题思路

1. 递归五部曲
   1. dp\[i][j] 表示第 i 行 j 列 有 dp\[i][j] 种路径到达
   2. 递推公式： dp\[i][j] = dp\[i-1][j] + dp\[i][j-1]
   3. 初始化：可以找到规律，最顶上一层和最左侧一列只能有一种方式达到，于是把这些都初始化为 1 即可接着从第二行开始 从左到右 遍历填值就好了，最后就能得到 终点的路径
   4. 遍历顺序：从前往后遍历是正常操作，但这题或许也能用递归，暂时还不太会，有机会感受一下
   5. 举例推导：

```javascript
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
```

> 总结：

1. 最后 return 的时候 疏忽了应该取 length-1 的，导致编码出错
2. 在初始化 j 的时候，没有考虑到 左上角 i 已经遍历过了，导致从 0 开始遍历造成了逻辑错误直接 break 了
   1. 如果j从 0 开始遍历的化，因为被 i 初始化过为1 了，所以这里会 break，所以 j 的位置要从 1 开始！
   2. 在 本地 debug 的时候很好的找到了这个问题并且解决了，效率很高，debug 也渐渐熟悉
3. 在提交的时候还是报错，没有考虑到 [[1,0]] 这种情况，这是只有一行或者一列的情况，并且开头就是石头，这样理论上后面的都是0了，为啥还是返回1呢
4. 遇到 [[1,1]] 第一行为两个石头的情况，去处理bug
   1. 分析后发现之前的剪枝没啥必要，都考虑进去了就注释掉了
   2. 把 第一次初始化行（i） 的情况优化到 遍历到石头，后续初始化为0
   3. 处理列的情况有点特殊
      1. 判断第一行第一个是不是石头，如果是石头就后续的第一行元素全为0
      2. 否则把第一次初始化列（j）的情况优化到 遍历到石头，后续初始化为0
   4. 这样处理就能把全部用例过了
5. 调试花了很多时间，算是考虑不全，但每次都能通过 debug 的方式精准定位到问题然后解决
6. 即使是这样精准定位都很浪费时间，更不用说笔试了
7. 经历过的测试用例：

```javascript
uniquePathsWithObstacles([[1, 1]]) // 这种情况又报错了，第一行碰到石头后，后续要初始化为0，不能不管他，因为默认不一定为0

uniquePathsWithObstacles([[1, 0]])

uniquePathsWithObstacles([
   [0, 0, 0],
   [0, 1, 0],
   [0, 0, 0]
 ])
```

## 整数拆分

### [LeetCode 题目](https://leetcode.cn/problems/integer-break/)

`给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。`

`10 --> 3*3*4=36   6-->3*3=9`

**题目分析**

1. 这题一开始看会纠结到底要拆分几个数进行相加才是最大？难道是暴力把所有相加的情况列出来再相乘求最大吗？
2. 实际上卡哥分析后的方式也几乎是把所有的情况列出来了，只不过不是分成我一贯思维那样
   1. 我想的是：先列出所有的相加的情况，再对他们进行相乘比较求值
   2. 卡哥的做法是：使用遍历的方式，列出一种相加的情况就相乘，和另外一种进行比较取最大的
3. 还有我的右脑思维经常影响着我，还得被卡哥的解法点醒才反应过来
   1. 做了六道动态规划的题目了，每次都是看到递推公式，我就脑子推演解题的过程，推演的全都是不小心用了递归的方式，但实际上每一题卡哥都是用最简单最直观的思维方式解题，每次都能让我反省一次自己想太深了！（`但这也是好事，比较递归的逻辑比较绕比较深，能用递归的方式想明白并且做出了是比较不错的，但就怕很多细节处理不了之后做题会懵，所以直观的方式我也学会来`）
   2. 比如这道题的 递推公式 ： `dp[i] = max(j*(i-j),dp[i-j]*j)`
      1. 我看到后面的 dp[i-j] 会想着这又是重复这一条递推公式，得到的结果就是 i-j 对应的最大值，从后往前推到最终的初始化 dp[2] ，得到值后就开始逆流的感觉得到答案了
      2. 还想着使用 记忆化搜索 进行剪枝的，但想了想好像并不会重复进行遍历，所以就不考虑这个操作了，但看来是真的学会了

> 解题思路（DP五部曲）

1. dp[i] 的含义：i 这个元素的最大拆分数相乘得到的值为 dp[i] 
2. 递推公式： `dp[i] = max(j*(i-j),dp[i-j]*j)`

3. 初始化： dp[2] = 2 
   1. 这个初始化 卡哥 经过了很深的讨论，说明五部曲不只有 递推公式，初始化、遍历顺序这些都是关键的步骤
   2. 为什么不是初始化 dp[1] 或者 dp[0] 呢？因为卡哥觉得没有意义，要根据题目赋予实际意义为主，并不是规定初始化一定要从 0 开始
4. 遍历顺序：
   1. 从递推公式 看得出来 ，dp 依赖于 dp[i-j] ，所以要求 dp 得先知道 dp[i-j] 
   2. 所以我们从前往后进行遍历即可
   3. 这个遍历顺序是关键，理解这个就能解决我之前总是想着递归的解法的这个问题
5. 举例推导
   1. 举例推导是举例 i 和 对应的 dp[i] 的值
   2. i= 2，3，4，5，6,7
   3. dp[i]=1,2,4,6,9,12
6. 做好了 dp 五部曲 也还是没办法很快速的解题，因为题目还有 循环、遍历、边界条件的各种细节，不看题解自己想也还是有点难度

```javascript
/**
 * @param {number} n
 * @return {number}
 */
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
      dp[i] = max(dp[i],max(j * (i - j), dp[i - j] * j))
    }
  }
  return dp[n]
}
```

> 总结：

1. 递推公式似乎出了问题
   1. 修改一下 递推公式 就过了这道题，说明其他地方都 ok 就这里出错了
   2. 答案是：`dp[i] = max(dp[i],max(j * (i - j), dp[i - j] * j))` 
   3. 我理解的是：`dp[i] = max(j * (i - j), dp[i - j] * j)`
   4. 为什么要比较 dp[i] 呢？
      1. 因为 i = 10 的时候，j 是从 1开始遍历尝试，一直找到一个最大的 dp[i],所以每次还有带上 dp[i] 进行比较，那是第二个循环，这一步没有思考清楚导致出现了很深的问题，清楚后就好了
      2. 有一些进入了背题的模式，但并不影响，题目也深刻理解了
2. 举例推导的时候，把题目搞混淆了，比如 dp[2] --> 1+1 = 1*1 =1 ，我就变成了 等于 2了，这一步在初始化的时候也错了
   1. dp[5] 我也变成了 2+3 =5，实际上是 2*3=6
3. 做好了 dp 五部曲 也还是没办法很快速的解题，因为题目还有 循环、遍历、边界条件的各种细节，不看题解自己想也还是有点难度。例如：
   1. 循环时，不考虑 j=0，因为不用拆分 0 的情况
   2. 循环时： i 从3开始遍历，这样 dp[i-j] 最初就是 dp[2]
   3.  边界确认：j<i-1,因为j=i-1 的情况得到的 i-j 就是 1，这种情况不用算也行，那这样算的话 **j<i/2** 就好了，后面都开始重复了呢 
      1.  这个 j<i/2 是之前做了一些题有了验证后得出的结论，潜意识就是知道这样可以优化，推导一下结果也就出来了



## 不同的二叉搜索树

### [LeetCode 题目](https://leetcode.cn/problems/unique-binary-search-trees/)

`给你一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉搜索树** 有多少种？返回满足题意的二叉搜索树的种数。`

> 中等题，并且考二叉搜索树的概念居多，笔试暂时没遇到这么难得，先不折腾这题


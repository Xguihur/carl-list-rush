

## 二分查找

### [LeetCode题目](https://leetcode.cn/problems/binary-search/)：

`给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1` 

**有两种情况：左闭右闭、左闭右开**

* 这两者的区别就在于边界的判断
* 左闭右闭：当 mid > val 时，right = mid-1
* 左闭右开：当 mid > val 时，right = mid

> 解题思路

1. 选择左闭右闭的方法
2. 定义 left、right、mid，获取到 val
3. 确定循环条件：left<=right (是否需要这个等于呢？思考一下)
   1. 思考了后，有一个特定情况：当right  = mid-1 = left 时 ，且mid 变化到与 left 相等，这时还需要进行一次判断 mid 是否为目标值，所以即使 left = right 也还需要继续判断
4. mid 与 目标值判断并且作出处理
5. 最后返回下标值

```javascript
//给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
const arr = [1,2.3.4.5.7.9.16]
let val = 4
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
search(arr,val)

```

---

> 过程中遇到的问题：

1. Javascript 中 的 (a+b)/2 并不是向下取整，是带有小数点的，于是需要通过 Math.floor() 方法进行取整！
2. 出现 BUG 时一下看不出来时，赶紧拷贝代码到 Vscode 新建一个 JS 文件，自己手写 用例，进行调试找到问题所在！

---
## 移除元素
### [LeetCode题目](https://leetcode.cn/problems/remove-element/)：

`在一个数组中原地移除所有数值等于 val 的元素并且返回数组新长度，原地指的是 O(1) 的空间复杂度，可以改变顺序，并且不需要考虑超出长度后的元素` 

**有两种比较优秀的方法**

* 快慢指针法
* 双向指针法（个人感觉效率比 快慢指针 高，因为少了一些不必要的移动）

> 解题思路

**快慢指针**

1. 定义快慢指针都为 0，获取到 val
2. 对快指针进行循环遍历
   1. 如果 快指针指向的值 不等于 val 就赋值给 慢指针指向的位置，快慢指针一起自增
   2. 如果 快指针指向的值 等于 val 就快指针自己自增就好
3. 最终快指针遍历完毕后，慢指针指向的位置同时也表示新数组长度，因为那是待填的坑

```javascript
let nums = [1,2,3,4,5,3,4,2,6,7]
let val = 4
var removeElement = function(nums, val) {
	 let slow = 0
     let fast = 0 //fast 和 slow 表示的是下标值，而不是数值
    for(fast;fast<nums.length;fast++){
        if(nums[fast]!==val){
            nums[slow] = nums[fast]
            slow++
        }
        //如果相等的情况就不管他，fast++就好
    }
    return slow
};
removeElement(nums,val)

```

---

> 遇到的问题：

1. 开始想偷懒使用` let slow,fast = 0`,进行初始化，最后运行就因为这个导致出错了，还是在 vscode 进行调试时发现的 **slow = NAN**
2. 改回去后在 LeetCode 执行就通过了。后来想试试简便的方法，发现这样是可以的：`let slow = fast = 0` 

---

**双向指针**

1. 定义 头指针 和 尾指针
2. 确定退出循环的条件：头指针 > 尾指针，循环条件尾 head<=tail
3. 每一次循环内部进行操作
   1. 循环头指针，直到遇到值为 val 的元素时停止
   2. 循环尾指针，直到遇到值 不为val 的元素时停止
   3. 交换头尾指针当前指向的元素，并且头指针自增，尾指针自减
4. 最终头指针指向的是值为 val 或者新数组尾部+1（即新数组长度），返回头指针的下标即可

```javascript
let nums = [1,2,3,4,5,3,4,2,6,7]
let val = 4
var removeElement = function(nums, val) {
	let head = 0
    let tail = nums.length-1
    //注意这里头和尾的比较是否包含 等于号 很有讲究，全是细节
    while(head<=tail){
        while(head<=tail&&nums[head]!==val){
            head++
        }
        while(head<=tail&&nums[tail]===val){
            tail--
        }
        if(head<tail){
            nums[head] = nums[tail]
            head++
            tail--
        }
    }
    return head
};
removeElement(nums,val)
```

---

> 遇到的问题：

1. 对于循环退出条件以及每次循环内部的边界值处理感到敬佩！实在是太细节了
2. 首先是循环条件为 **<=** ,为什么会有 等于？
   1. 因为内部交换完 头尾 指针的元素后各有 自增和自减，这一操作可能存在 等于 的情况，如果不处理就漏掉了
3. 其次是内部两个 while 为什么要用 **<=** 处理？
   1. 因为内部两个 while 各自都会对指针进行操作，可能存在 等于 的情况，这种情况也必须考虑在内，如果头指针在等于的时候继续处理了会出现两种情况
      1. 值不为 val，那么 头指针自增，第二个 while 就无法进入了，最终会跳出循环返回 头指针的下标 表示**新数组长度**
      2. 值为 val，那么头指针不处理了，第二个 while 由尾指针循环，尾指针遇到val会自减，最终变成在 head  > tail，此时head 指向的值不算入新数组中
4. 为什么最后交换的时候，却变成了 < 而不是 <= 呢？
   1. 正如 3.1 所列出的情况，还有其他的情况组合可自行推演，但最终都是不可能出现 head===tail 的情况的，于是也不必要在最后 加上 == 的判断。
   2. 如果你认为加上 == 也无所谓，只是多一次交换而已，那就错了！内部还有 头部自增、尾部自减的操作，如果在相等时头部再自增，最终新数组的长度就不准确了！
5. 最终将 头指针的下标 作为新数组的长度实在是太细节了，把所有的情况考虑进去实在不是一件容易的事！

---
## 有序数组的平方（注意负数）

### [LeetCode题目:](https://leetcode.cn/problems/squares-of-a-sorted-array/)

`给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。`

**有两种方法** 

* 暴力平方再排序
* 双向指针+再多申请一个数组

> 解题思路

**暴力**

1. 先平方
2. 再排序

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-5,-3,0,2,4,6]
var sortedSquares = function(nums) {
	nums = nums.map(item=>item*item)
    nums.sort() // 这个sort 方法是会修改原数组的
    return nums
};
sortedSquares(nums)

```

> 遇到的问题：

1. 使用 forEach 遍历的时候，理想情况是修改原数组，但实际上并没有成功修改，多次出现这种情况了
2. 使用 sort 排序时并没有起效果，在 Vscode 中Debug后发现确实没有发生效果，最终查了百度如何使用才知道对数字的排序需要传入一个回调函数才行

```javascript
// 如下是无法正常修改到 nums 的
nums.forEach(item=>{
    item = item*item
})
// 现在使用的方法是使用 map 函数
nums = nums.map(item=>item*item)

// 查阅 W3C 后发现：如果想使用 forEach 修改原来的数值，需要额外传入两个参数，修改原数组对应的值，而不是直接修改 item
let nums = [65, 44, 12, 4];
nums.forEach((item,index,arr)=>{
    arr[index] = item*item
})

--------------------------------------------------------

// sort 排序数字的正确用法
let nums = [-5, -3, 0, 2, 4, 6]
 nums.sort((a, b) => a - b) // 这个sort 方法是会修改原数组的
 console.log(nums) //[ 0, 4, 9, 16, 25, 36 ]

// sort 排序字母却不需要这个回调函数，直接调用即可
let nums2 = ['bdhs', 'asdf', 'abfs', 'vfd', 'cds']
nums.sort() 
console.log(nums) //[ 'abfs', 'asdf', 'bdhs', 'cds', 'vfd' ]

```

**双向指针**

1. 首先定义双向指针，并且额外定义一个固定大小的数组，从后往前赋值
2. 将 head 和 tail 平方后，比较，大的赋值到数组中，一直遍历直到  head > tail
3. 使用 unshift 进行插入元素，因为插入的都是大的，保证有序并且从小到大排列嘛
4. 循环退出条件：head > tail ,即循环条件为 head <= tail , 思考一下就知道当 等于的时候这个值还没有放入 新数组中，所以依然要进行判断

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-5, -3, 0, 2, 4, 6]
var sortedSquares = function (nums) {
  let head = 0 // 只是下标
  let tail = nums.length - 1
  let newArr = []
  while (head <= tail) {
    if (nums[head] ** 2 > nums[tail] ** 2) {
      newArr.unshift(nums[head] ** 2)
      head++
    } else {
      newArr.unshift(nums[tail] ** 2)
      tail--
    }
  }
  return newArr
}
sortedSquares(nums)

--------------------------------
// 优化一下效率，平方过的就让它存储起来，这样算是一定程度上的剪枝
let nums = [-5, -3, 0, 2, 4, 6]
var sortedSquares = function (nums) {
  let head = 0 // 只是下标
  let tail = nums.length - 1
  let newArr = []
  let first = nums[head] ** 2
  let second =  nums[tail] ** 2
  while (head <= tail) {
    if (first >second) {
      newArr.unshift(first)
      head++
      first = nums[head] ** 2
    } else {
      newArr.unshift(second)
      tail--
      second =  nums[tail] ** 2
    }
  }
  return newArr
}
sortedSquares(nums)

```

> 遇到的问题：

1. 经常犯一个小错误：定义的时候 head 和 tail 是下标，比较和处理的时候却直接使用下标进行比较，经常忘记使用 **数组[下标]** 获取值进行比较



---
## 长度最小的子数组

### [LeetCode题目(面试常考)：](https://leetcode.cn/problems/minimum-size-subarray-sum/)

`给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。`

**两种方法**

* 暴力，两个 for 循环，找到和 大于 7 时比较数组的元素长度进行存储（此时不做讨论，学通用性高的解法，与时间赛跑！）
* 滑动窗口（使用一个for循环完成题目，很常用的方式尽量学会来）

> 解题思路：

**滑动窗口**

1. 定义滑动窗口头指针、尾指针，定义最终返回的窗口大小值，定义一个变量存当前窗口中所有元素的值。因为题目要求的是 连续的子数组，所以可以使用滑动窗口，否则不能使用滑动窗口！
2. 使用循环控制尾指针遍历以及累增窗口中的元素，当这个窗口元素值大于 s 时，进入一个有序循环中操作
3. 在循环中操作的是获取当前窗口的长度，与需要返回的窗口大小值 进行比较选择小的那一个，最后将 头指针向后移动一位，继续当前循环判断操作！（因为存在头指针移动后依然大于 s 的情况）
4. **注意：**
   1. 关于 result 的初始化设置为 nums.length+1 比较合适，这样最终判断如果它大于 数组 的长度则表示没有找到任何一个子数组，返回 0 即可。 
      1. 如果初始化为 0 是不对的，因为要找最小符合要求的子数组的长度，为0则无法比较取最小值
   2. 判断 sum>=target 时要加上 等于号 ，题目说的是大于等于 s ，所以要注意细节

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let target = 7
let nums = [1,2,3,4,2,3,1,2,8]
var minSubArrayLen = function(target, nums) {
	let head = tail = 0 // 表示下标
    let result=nums.length+1 // 表示最终结果
    let sum = 0 // 表示窗口值
    for(tail;tail<nums.length;tail++){
        sum+=nums[tail]
        while(sum>=target){
            result = Math.min(result,tail-head+1)
            sum-=nums[head]
            head++
        }
    }
    if(result>nums.length){
        return 0
    }
    return result
};
minSubArrayLen(target,nums)
```



---
## 螺旋矩阵||
> （这类题没啥算法规律，就是硬写，但笔试有时会考这类）
`就不写这题了，先刷后面的有助于笔试的题，快速战斗！`



---
## 总结
---

1. 通过写这个博客实际对算法更加深了一些印象，特别是看似简单的题目，因为要写博客所以大量梳理思路，写在博客上，最后跑一下力扣看看是否通过，未通过就再调试，实际上也算是在刷题了，二刷代码随想录！
2. 现在的做法是：
   1. 先在代码随想录拿到 力扣 链接，给我的博客搭好这题的框架
   2. 接着回顾之前刷题的记录，在 vscode 中看看之前刷题的思考
   3. 最后看完就完善博客，纯手敲代码在博客中，写完后放到力扣上跑一下
      1. 如果失败了就排查原因
      2. 难以排查的就 copy 到 vscode 中调试一下快速定位问题
3. 在这个过程中能很好的收获到一些东西
   1. 比如一些边界条件的处理没有实际自己写的话，单纯看题解是感受不到这些细节的
   2. 或者是一些 JS 实践的方法，包括数组、字符串、排序等等的方法还有一些不熟练的地方，在自己刷的时候总结好错误，真正笔试的时候就不会因为这些问题导致花大量时间进行调试了，也算是很大的磨练！
   3. 还有一点是磨练心性，就像老人家练字一样。写的时候会注重过程，自己急的时候就告诉自己不要太在乎结果，把这个过程一步一步走好，不会说这个题目写出来就算了，例如：
      1. 意识到这个题解写出来后，里面一些不太清晰的边界，会进行思考和推演，经过验证后往往会惊叹这些细节处理太强大了，甚至还会环环相扣的细节，如 `移除元素`中的双向指针做法
      2. 一些数组的方法，当时使用的方法无法达到效果，换一个后就达到效果，并且成功 AC了。事后会去思考为什么之前的不行，换一个就可以？继续研究就更加了解数组方法的使用了，这也为之后省一些麻烦吧！
4. 还有就是不要掉进老鼠赛跑的游戏中了，即使是刷题也是。
   1. 现阶段重要的是成熟到过笔试，而不是漫无目的的刷题。
   2. 对于类型相似的题，刷了一些总结了通用的方法即可，一些没太多技巧性的不要花太多的时间在里面了。
   3. 得知道自己在干什么，为什么刷这个题，为什么不刷那个题，不要一根筋死磕！
5. 数组就算过了，接下来往后走，做一些之前笔试常遇到的一些题，总结经验认真刷题！
6. 这里给两个语录吧：
   1. 纸上得来终觉浅，绝知此事要躬行
   2. 但行好事，莫问前程！
   3. 三傻大闹宝莱坞中的一句：the pursuit of excellence, success will inadvertently catch up with you | 追求卓越,成功就会在不经意间追上你
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
---
## 长度最小的子数组
> （找出和>= s 的最小连续子数组）
---
## 螺旋矩阵||
> （这类题没啥算法规律，就是硬写，但笔试有时会考这类）
---
## 总结
---



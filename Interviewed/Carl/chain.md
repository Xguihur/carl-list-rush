

## 链表的优点

1. 对于删除、插入操作多的可以使用链表，这样对于内存的开销没有这么大
2. 对于查询多的操作使用数组或 hash 表比较合适，因为链表的搜索只能从头开始，效率没这么高

## 初始化链表

**使用JS将一个数组初始化为链表(纯手写的）**

```javascript
const arrs = [1, 2, 3, 4, 5, 6, 7, 8]
class ListNode {
  val
  next
  constructor(val, next) {
    // 如果不传或者少传，默认设置为-1 && null
    this.val = val ?? -1
    this.next = next ?? null
  }
}

// 转化函数
const translate_arrToListNode = arr => {
  let head = new ListNode() // 初始化一个虚拟头节点
  let cur = head
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  // console.log(head)
  return head.next // 将转化好的 链表头节点 return 出去
}

const head = translate_arrToListNode(arrs)
console.log(head)

```



## 移除链表元素

### [LeetCode题目：](https://leetcode.cn/problems/remove-linked-list-elements/)

`题意：删除链表中等于给定值 val 的所有节点。`

**有两种方法：**

* head 指向的是第一个节点，后续操作从这里开始
* **设置一个虚拟头节点进行操作**（因为使用这种方式时，对于头节点的处理不需要额外处理，能统一处理，所以后续都采用这种方式进行刷题与学习）

> 解题思路

**虚拟头节点**

1. 创建一个虚拟头节点，next指向头节点
2. copy一个虚拟头节点和一个 head 节点，用于遍历对比
3. 循环遍历链表，循环条件为 cur != null，pre 为 null也可以的，不计较就好
4. 循环内部比较 cur 的值 与目标值是否相等
   1. 如果相等就将 pre 的 next 指向 cur 的next 
   2. 否则pre 等于 cur ，即保留这个元素在链表中
5. 最后 每次循环结束，cur 都要向后移动，最终 return 虚拟头节点的下一个节点即表示新的链表的头节点！

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const arr = [1,2,3,6,4,6,5,6]
const val = 6
//转化一下，获得 head 先,需要先导入 translate_arrToListNode 这个函数
const head = translate_arrToListNode(arr)
var removeElements = function(head, val) {
	//虚拟头节点
    let dummy = pre = new ListNode(-1,head)
    let cur = head
    while(cur!==null){
        if(cur.val === val){
            pre.next = cur.next
        }else{
            pre = cur
        }
        cur= cur.next
    }
    return dummy.next
};

```

> 遇到的问题

1. 第一次写链表，为了规范格式去自己写了 数组转链表，并且按照 LC 上的格式编写
2. 判断值的时候忘记了 使用 cur.val 进行比较，而是直接使用了 cur 比较，这样也能过部分用例但算是运气，要注意这个问题
3. 每次写题，无论是不是转化格式，都使用虚拟头节点的方式来写，这样出错的概率小一些！



---
## 设计链表
> （练习链表的基本操作：增删改查）
---
## 翻转链表1
### [LeetCode 题目(比较经典，面试考过)](https://leetcode.cn/problems/reverse-linked-list/)：

`反转一个单链表。`

**有两种方法**

* 双指针法 -- 从前往后遍历（这里只演示从前往后的方法）
* 双指针法 -- 从后往前遍历
* 将双指针的循环方法变成递归也能解决

> 解题思路

**双指针法 -- 从前往后遍历**

1. 设置三个变量，一个是存放后一个元素值的，一个是存放当前遍历的值的，一个存放前一个元素值的
2. 循环遍历，循环条件是（cur!==null） ，只要当 cur 等于 null 时表示循环到末尾了，此时 pre 指向的就是 新的链表的 头节点
3. 循环内部进行交换操作
   1. 暂存 cur.next
   2. 改变 cur.next 的指向为 pre
   3. 将 pre 和 cur 都向后移动一位

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const arr = [1,2,3,4,5,6,7,8]
//转化一下，获得 head 先,需要先导入 translate_arrToListNode 这个函数
const head = translate_arrToListNode(arr)

var reverseList = function(head) {
	let cur = head
    let pre = null
    let temp = null
    while(cur){
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    // 最后return pre 即可
    return pre
};
reverseList(head)
```

**双指针法 -- 用递归的方式实现**

`递归三部曲`

1. 确定的输入，确定的输出：输入链表元素的前一个元素、当前的元素，输出新的链表头节点
2. 递归终止条件：当前元素值为 null 时，不再进行下一次递归，直接 return 当前元素的pre
3. 循环体：
   1. 先判断当前元素是否为 null 
   2. 如果为 null 就 return pre
   3. 如果不为 null 就 翻转链表 并且继续递归
4. 最终会在递归体中拿到一个返回值，最终结果就是这个！

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const arr = [1,2,3,4,5,6,7,8]
//转化一下，获得 head 先,需要先导入 translate_arrToListNode 这个函数
const head = translate_arrToListNode(arr)

var reverseList = function (head) {
  const reverse = (pre, cur) => {
    if (!cur) return pre
    const temp = cur.next
    cur.next = pre
    return reverse(cur, temp) // 一开始漏了这个 return 导致一直返回 undefined，玩递归得注意这个
  }
  return reverse(null, head)
}
reverseList(head)
```

> 遇到的问题：

1. 在玩递归的时候一开始不熟练，三部曲列对了，但具体三部曲的步骤不太清晰，可能还需要锻炼！
2. 最后 return 那些环节也经常出现一些问题，漏了 return ，归根结底还是对递归不太熟练，再练练就好！



---
## 两两交换链表中的节点
> （不只是交换而已）
---
## 删除链表的倒数第N个节点
> （链表是从头开始的，技巧性十足）
>
> （比较熟悉了，就是倒数第N个，就让快指针先走N+1步，因为要删除链表元素得获取到这个元素的前一个元素）
---
## 判断链表相交并且找到交点
> （有点难度，但是十分有意思）
>
> （这个也是双指针，比较两个链表的长度，然后让长的先走，控制到长度一致时开始一起遍历，如果节点完全相同时表示找到交点！注意是**节点完全相同**，而不是值相同）
---
## 环形链表||
> （这题在笔试中遇到过，两者时间不同赛跑求相遇时间的）
---
## 总结
---

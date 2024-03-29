## 题意：删除链表中等于给定值 val 的所有节点。

* 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
* 示例 2： 输入：head = [], val = 1 输出：[]
* 示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]

## 解法：

1. 存在 虚节点，也存在 pre node 的方法
2. 不存在 虚节点，但存在 pre node 的方法
3. 虚节点 与 pre node 都不存在的方法

## 细节

* 前两种方法中都引入了 pre，核心代码如下：
    * 细节一：判断退出循环条件是 cur != null
    * 细节二：当 cur.val = val 时，通过将 pre.next = cur.next
    * 这时需要说明一下：
        * pre 的作用是 控制链表节点的下一个指向，也就是说 pre 是控制链表的 增删！
        * cur 的作用是 顺着链表往下逐个与 val 比对，相等的情况内部通过 pre 删除链表，不相同的情况就说明原本的链表是合格的， pre 往后移动一位（指向当前遍历到的链表的末尾）

```
    while (cur != null) {
            if (cur.val == val) {
                pre.next = cur.next;
            } else {
//                如果cur的值不为 val 的话，说明原本链表的指向是可以的，不需要变动，这时候 pre 向后移动
                pre = cur;
            }
            cur = cur.next;
        }
```

## 感悟

1. 一开始使用 java 写链表是很懵的，啥也不会，从 Leetcode 拿到ListNode 类也不知道要怎么用
    1. 后来知道了是在同一个包中创建一个 ListNode 类，其他类直接使用就好了（原理是啥也不知道）
2. 后来如何初始化链表也不会，还以为是 java 才要初始化的。
    1. 后来问了大佬才知道确实是需要自己去写一个方法初始化链表的，包括未来的 树结构 也要写一个方法去初始化。
    2. 百度了一个初始化的方法，成功初始化了链表之后，我才反应过来如果用 JS 也还是要一样的 初始化链表，因为链表是一个数据结构，里面有 val 和 next ！！！
    3. 这时候才更深刻的理解之前学的数据结构有什么用了！之前学习数据结构只知道不同的数据结构应对不同的场景有不同的效果，还以为这些数据结构是直接就存在的，类似于前端的 数组还是对象 直接 new 出来。但是实际上是
       自己设计的一个结构，然后利用这些结构对这组数进行操作而已！！！
    4. 下次学习数据结构会更好的理解不同的数据结构有不同的好处了，因为能够知道数据结构对应的优势可以在什么应用场景中使用，也知道怎么样去创建这种数据结构了！（之前一直想着用不上，等什么时候 new
       就好了，刷个算法真的发现之前太天真了！！！）
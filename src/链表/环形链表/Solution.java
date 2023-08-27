package 链表.环形链表;

//题解：
//    1. 首先得判断是否有环，其次是如何找到入口点
//    2. 判断是否有环，可以使用双指针，快指针一次走两步，慢指针一次走一步（这样能保证在有环的情况下，快指针每次移动一步向慢指针逼近，不会跳过慢指针），如果最终慢指针与快指针相遇，则表示有环
//    3. 有一个很强的公式推理求出环的入口点，至今还懵逼：在相遇的那一刻，将整个链表分为三段路程：x，y，z：x表示从起点到入口点的距离，y表示从入口点到相遇点的距离，z表示从相遇点回到入口点的距离。三者之间通过快慢指针形成了一个等式，最终解出当 x =(n-1)(y+z)+ z 的时候指向的位置就是入口点！！！也就是说从相遇点开始走，不管转了几圈，最终相遇一定是在入口处！！！（这个太强了，还有些难以理解）
//    4. 找到入口点的方法是从头节点以及相遇点开始，两个指针每次移动一步，直到相遇，那个节点就是入口点。很妙，暂时不太理解
//    5. 还有一些细节的思考，例如为什么慢指针在环中一定会在第一圈相遇而不是之后几圈相遇，这个细节在视频里平铺圆说的很好理解，值得在刷几次看细节。同时第三点也是比较难以思考的点，可以多理解理解

import 链表.utils.ListNode;

public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
//            两个指针移动
            fast = fast.next.next;
            slow = slow.next;
//            当相遇时表示有环，需要寻找入口点
            if (fast == slow) {
                ListNode index1 = fast;
                ListNode index2 = head;
                while (index1 != index2) {
                    index1 = index1.next;
                    index2 = index2.next;
                }
//                一定会找到的，找到就return 任何一个index指针即可
                return index1;//有点疑惑题目的意思，没有完全理解题目的意思，题目说找的就是找到入口节点，我还以为找到节点的索引哈哈
            }
        }
        return null;//表示不存在环
    }
}

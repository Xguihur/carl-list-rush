package 链表.链表相交;

//解题思路：
//    1. 我们不需要判断链表是否相交，直接去找交点，找到就返回，没有找到就表示不相交，这样就好了
//    2. 有一个很妙的点，自己没想到，但隐约有感觉的地方：两个链表要保证是一起到末尾的，也就是说如果链表不一样长，短的要先等一下长的，当两个链表等长了再一起前进，如果节点相同那就表示相交，如果到最后了都不相同那就直接返回null，特别关键
//    3. 所以我们要做的就是：
//        1. 获取两个链表的长度
//        2. 获取两个链表长度的 差值，并且能够知道哪个是长链表，哪个是短链表，先移动长链表
//        3. 让长的链表先走 差值 步，最后进行一一比对就好

import 链表.utils.ListNode;

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
//        获取链表的长度
        int lenA = 0;
        int lenB = 0;
        ListNode curA = headA;
        ListNode curB = headB;
        while (curA != null) {
            lenA++;
            curA = curA.next;
        }
        while (curB != null) {
            lenB++;
            curB = curB.next;
        }
//        遍历完后重新赋值 curA 和 curB
        curA = headA;
        curB = headB;
//        判断是否需要交换节点以及长度，保证 A 是长的那一边
        if (lenA < lenB) {
//            交换节点
            ListNode temp = curA;
            curA = curB;
            curB = temp;

//            交换长度
            int tempInt = lenA;
            lenA = lenB;
            lenB = tempInt;
        }

//        取差值并且让长的先移动 差值 步
        int n = lenA - lenB;
        while (n-- > 0) {
            curA = curA.next;
        }
//        最终两个链表在同一起跑线，一起移动，并且判断节点是否相同
        while (curA != null) {
            if (curA == curB) {
//                找到了相交节点
                return curA;
            }
//            否则继续向后移动
            curA = curA.next;
            curB = curB.next;
        }
//        如果退出循环表示没有相交节点

        return null;
    }
}

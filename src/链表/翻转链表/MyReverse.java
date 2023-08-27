package 链表.翻转链表;

//  题意：反转一个单链表。
//    示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

import 链表.utils.ListNode;
import 链表.utils.ListParent;

//有两种方法：第一种是从前往后翻转，第二种是从后往前翻转，都是在同一个链表上操作的
//第一种方法有两种方式，循环或者递归。当然循环和递归可以互相转化
//循环

//从前往后的算法是：用两个指针，一个是 pre ，一个是 cur，用一个临时变量存放 cur.next ，然后将cur的下一个指针指向pre，之后两者继续后移
//退出循环的条件是：cur==null，表示cur已经指向尾节点的 next了，pre则指向尾节点，这时return pre 即可

public class MyReverse extends ListParent {
    //    这是循环的方法
    public ListNode reverseList(ListNode head) {

        if (head == null) {
            return head;
        }
        ListNode pre = null;//一开始 pre 为null，表示翻转后的尾指针
        ListNode cur = head;
        ListNode temp = null;//临时指针，存放下一节点的
        while (cur != null) {
            temp = cur.next;//将下一节点存放起来
//            开始改变指针，形成交换了
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
//        退出循环时，pre指向的就是头节点
//        打印输出一下
        printLinkedList(pre);
        return pre;
    }

    //    来个递归的方法
    public ListNode reverseList2(ListNode pre, ListNode cur) {
//    pre 开始为 null， cur开始为头节点。之后遍历后的 pre 就是 新的头节点
        if (cur == null) {
//            printLinkedList(pre);
            return pre;
        }
        ListNode temp = cur.next;//每次循环都创建一次 temp，不知道是不是浪费性能
        cur.next = pre;
//    下面这个递归的参数实际上就是全部向后移动一位了
        return reverseList2(cur, temp);//这里少了 return 不行！！！因为如果少了 return，那么必须要返回一个 pre，此时的 pre 是参数中的 pre，是旧值，就不是我们想要的了，通过 return 一个递归函数，最终的返回值只有退出循环的那一次的 pre，那才是我们想要的
//        退出循环时，pre指向的就是头节点
//        打印输出一下
//        printLinkedList(pre);

    }

    public ListNode reverseList3(ListNode head) {
        return reverse(null, head);
    }

    private ListNode reverse(ListNode prev, ListNode cur) {
        if (cur == null) {
            return prev;
        }
        ListNode temp = null;
        temp = cur.next;// 先保存下一个节点
        cur.next = prev;// 反转
        // 更新prev、cur位置
        // prev = cur;
        // cur = temp;
        return reverse(cur, temp);
    }

}















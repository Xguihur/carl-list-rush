package 链表.删除链表的倒数第n个节点;

//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

import 链表.utils.ListNode;
import 链表.utils.ListParent;

public class MyDelete extends ListParent {
    public static void main(String[] args) {
        int[] list = {1, 2, 3, 4, 5};
        ListNode head = createLinkedList(list);
//        执行函数
        Solution solution = new Solution();

        ListNode result = solution.removeNthFromEnd(head, 5);
//        打印新的链表
        printLinkedList(result);
    }
}

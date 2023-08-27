package 链表.移除链表元素;

//不添加虚节点,也不添加 pre node 的方式
//如果不添加 虚节点，那要另外处理 头节点为目标值 的情况
//如果不添加 pre node，那就要一个变量控制 链表的增删 和 链表的查询
//最后 return “干净的”链表头节点就好了

import 链表.utils.ListNode;

public class Main3 {
    public static void main(String[] args) {
        int[] data = {1, 2, 6, 3, 4, 5, 6};
        ListNode head = createLinkedList(data);
//        执行函数
        ListNode result = removeElements(head, 2);
//        打印链表
        printLinkedList(result);
    }


    //    删除目标元素
    public static ListNode removeElements(ListNode head, int val) {
        while (head != null && head.val == val) {
            head = head.next;
        }
        if (head == null) {
            return head;
        }
        ListNode curr = head;//创建一个节点控制链表的增删以及遍历
        while (curr != null) {
//            这里可以用 笔 推演一下,要用 while，一开始用的是 if
            while (curr.next != null && curr.next.val == val) {
                curr.next = curr.next.next;
            }
//            无论如何都向后移动，因为当前 curr 一定是有值的，往后遍历
            curr = curr.next;
        }

        return head;
    }

    //创建一个链表的方法
    private static ListNode createLinkedList(int[] arr) {//将输入的数组输入到链表中
        if (arr.length == 0) {
            return null;
        }
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {//过程
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    //打印一个链表的方法
    private static void printLinkedList(ListNode head) {//将链表结果打印
        ListNode current = head;
        while (current != null) {
            System.out.printf("%d ->", current.val);
            current = current.next;
        }
        System.out.println("NULL");

    }

}

package 链表.移除链表元素;
//添加虚节点也添加 pre Node 的方法
//添加了虚节点就直接用统一的方式去遍历所有的链表
//注意最后 return 的时候要将真正的 头节点 return 出去，也就是 dummy.next

import 链表.utils.ListNode;

public class Main_clear {
    public static void main(String[] args) {
        int[] data = {1, 2, 6, 3, 4, 5, 6};
        ListNode head = createLinkedList(data);

//        执行方法
        ListNode result = removeElements(head, 6);
        printLinkedList(result);
    }

    public static ListNode removeElements(ListNode head, int val) {
        ListNode dummy = new ListNode(-1, head);//值为-1，指针为头节点，这个节点是预设虚节点
        ListNode pre = dummy;//初始化用于索引的指针
//        System.out.println(dummy);
//        System.out.println(pre);
        ListNode cur = head;//用一个指向当前值的指针与 val 进行对比
        while (cur != null) {
            if (cur.val == val) {
//                如果值相等那就 pre 指针指向后一个值
                pre.next = cur.next;
            } else {
//                否则 pre 指向 cur
                pre = cur;
            }
//            继续向后比对
            cur = cur.next;
        }

        return dummy.next;//因为要 返回 第一个节点，这时就不能吧 虚节点也 return 出去了
    }

    //    创建一个链表的方法
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

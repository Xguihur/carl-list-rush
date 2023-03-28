package 链表.翻转链表;

import 链表.utils.ListNode;
import 链表.utils.ListParent;

public class Reverse extends ListParent {
    public static void main(String[] args) {
        int[] list = {1, 2, 3, 4, 5};
        ListNode head = createLinkedList(list);
//        调用翻转方法
        MyReverse myReverse = new MyReverse();
//        ListNode newHead = myReverse.reverseList(head);//循环的
        ListNode newHead = myReverse.reverseList2(null, head);//自己递归的

//        ListNode newHead2 = myReverse.reverseList3(head);//题解递归的
        printLinkedList(newHead);
    }


}

package 链表.链表相交;

import 链表.utils.ListNode;
import 链表.utils.ListParent;

public class MyIntersection extends ListParent {
    public static void main(String[] args) {
        int[] list1 = {0, 9, 1, 2, 4};
        ListNode head1 = createLinkedList(list1);
//        这样弄得测试用例肯定不相等的，换个方式去定义
//        int[] list2 = {3, 2, 4};
//        ListNode head2 = createLinkedList(list2);
//        如下这样或许就能找到相交节点了
        ListNode head2 = new ListNode(3);
        head2.next = new ListNode(7);
        head2.next.next = head1.next.next.next;


//        执行函数
        Solution solution = new Solution();
        ListNode result = solution.getIntersectionNode(head1, head2);
//        打印一下链表
        printLinkedList(result);
    }

}

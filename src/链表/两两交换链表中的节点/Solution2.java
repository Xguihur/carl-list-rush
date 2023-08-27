package 链表.两两交换链表中的节点;

import 链表.utils.ListNode;

//递归的方法
public class Solution2 {
    //        递归的方法
    ListNode dummy = new ListNode(-1);//虚拟头节点  之所以提出来作为类的属性，是因为递归内部return 的时候需要用到这个 dummy，不然就只能传参，那样太麻烦了

    public ListNode swapPairs2(ListNode head) {
        dummy.next = head;//不要忘记指向头节点了

        if (dummy.next == null || dummy.next.next == null) return dummy.next;//在开始之前也进行一次判断
        ListNode result = swapReduce(dummy, dummy.next, dummy.next.next, dummy.next.next.next);
        return result;
    }

    private ListNode swapReduce(ListNode cur, ListNode firstNode, ListNode secondNode, ListNode tempOut) {
//        firstNode = cur.next;
//        secondNode = cur.next.next;
//        tempOut = secondNode.next;
//            开始交换
        cur.next = secondNode;//头节点指向第二个节点
        secondNode.next = firstNode;//第二个节点指向第一个节点
        firstNode.next = tempOut;//第一个节点指向第三个节点，至此交换完毕

//        cur = firstNode;//修改 cur 指向，用于下一次循环修改
        if (firstNode.next == null || firstNode.next.next == null) return dummy.next;//交换之后进行判断，不为空则继续进行递归
        return swapReduce(firstNode, firstNode.next, firstNode.next.next, firstNode.next.next.next);
    }
}

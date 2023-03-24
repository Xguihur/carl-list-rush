package 链表.移除链表元素;

//不添加虚节点但添加 pre node 的方式
//如果不添加 虚节点，那要另外处理 头节点为目标值 的情况
//最后 return “干净的”链表头节点就好了

public class Main2 {
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
//        处理头节点为目标值的情况
        while (head != null && head.val == val) {
//            一直重新定义头节点，直到为 null 或者 为非 val 的元素，这时候才作为目标链表头节点
            head = head.next;
        }
//        处理掉 head 为空的情况
        if (head == null) {
            return head;
        }
//        定义 pre 指针以及 cur 指针，pre指针用于管理链表的结构（下一个节点指向谁），cur指针用于将链表中每个值与，目标值比对
        ListNode pre = head;
        ListNode cur = head.next;
        while (cur != null) {
            if (cur.val == val) {
                pre.next = cur.next;
            } else {
//                如果cur的值不为 val 的话，说明原本链表的指向是可以的，不需要变动，这时候 pre 向后移动
                pre = cur;
            }
            cur = cur.next;
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

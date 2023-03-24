package 链表.移除链表元素;
//添加虚节点也添加 pre Node 的方法
//添加了虚节点就直接用统一的方式去遍历所有的链表
//注意最后 return 的时候要将真正的 头节点 return 出去，也就是 dummy.next

//题意：删除链表中等于给定值 val 的所有节点。
//    1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
//    示例 2： 输入：head = [], val = 1 输出：[]
//    示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]


public class Main {
    public static void main(String[] args) {
        int[] data = {1, 2, 6, 3, 4, 5, 6};
        ListNode head = createLinkedList(data);

//        执行方法
        ListNode result = removeElements(head, 6);
        printLinkedList(result);
    }

    public static ListNode removeElements(ListNode head, int val) {
//        首先判断 head 是否为空：如果为空则return head
//        否则创建 pre 节点，节点的next 指向 head，以及创建 cur --> 当前节点，指向当前位置
//        接着循环 cur.val 如果等于 val 就将 pre.next 指向下一个节点，否则 pre = cur，向前移动
//        无论是否判断成功 cur 都++

//        测试一下如果访问一个对象的空属性值是什么，结果为 NULL
//        ListNode a = new ListNode(1);
//        System.out.println(a.next);//NULL

        ListNode dummy = new ListNode(-1, head);//值为-1，指针为头节点，这个节点是预设虚节点
        ListNode pre = dummy;
        //初始化一个指针，用来遍历链表，实现删除元素（这个指向是 pre 和 dummy 指向同一个地址吗？:事实证明是的！
        // 那也就是可以两行代码合并为一行咯?:后面想了想还是不能合并为一行，因为最后return 的时候还得将头节点return出去，合并了之后就拿不到头节点了，因为 pre 已经指向了尾部了）
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

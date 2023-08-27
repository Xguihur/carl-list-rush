package 链表.设计链表;
//这道题很好的锻炼了链表的基本操作
//重点是确定五个点：
//    1. 链表是从 0 开始的
//    2. 对链表操作的时候，要清晰的知道什么东西是 n ，例如有时 cur.next 是 n ，有时 cur 是 n
//    3. 新值元素的时候要注意先将 新节点的指针 指向 cur.next ，然后再将 cur.next 指向新节点
//    4. 还需要对输入的值的合法性进行验证,边界条件考虑到
//    5. 这次方法没有 虚拟头节点 的方式,但是推荐用头节点的方式,可以再练练

//实现 MyLinkedList 类：
//    MyLinkedList() 初始化 MyLinkedList 对象。
//    int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
//    void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
//    void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
//    void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
//    void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。


import 链表.utils.ListNode;
import 链表.utils.ListParent;

public class MyLinkedList1 extends ListParent {
    int size;
    ListNode dummy;//头节点是一个虚节点
    ListNode head;

    public MyLinkedList1() {
        int[] list = {1, 2, 3, 4, 5, 6};
        head = createLinkedList(list);
        dummy = head;//初始化头节点
        size = 6;//初始化长度
//        System.out.println(size);

    }

    //    获取下标为 n 的值
    public int get(int n) {
        if (n < 0 || n >= size) {
//            说明目标索引不再 链表 之内
            return -1;
        }

        while (n > 0) {//当 n 大于 0 说明不是头节点,可以往后查找
            dummy = dummy.next;
            n--;
//            从0开始,要找第n个就循环n次
        }
//        最后 输出 dummy.next
        return dummy.val;
    }

    //    头插法
    public void addAtHead(int val) {
//        实际上就是在索引为0的位置前面添加一个值
        addAtIndex(0, val);
    }

    //    尾插法
    public void addAtTail(int val) {
//        实际上就是等于 size 的地方添加
        addAtIndex(size - 1, val);
    }

    //    插入到下标为 n 的元素之前
    public void addAtIndex(int n, int val) {
        dummy = head;//初始化dummy
        ListNode newNode = new ListNode(val);
        if (n == size) {
//            在尾部追加
            while (n-- > 0) {
                dummy = dummy.next;
            }
//            添加元素
            dummy.next = newNode;
        } else if (n == 0) {
//            这就是在头节点前添加节点
            newNode.next = head;
            head = newNode;
        } else {
            while (n-- > 1) {
//                取到 n 之前的元素,然后进行插入操作
                dummy = dummy.next;
            }
//            添加元素
            newNode.next = dummy.next;
            dummy.next = newNode;
        }
//        如果 n 大于 size,不做处理,可以抛出一个错误的
//        在结尾打印以下链表吧
        printLinkedList(head);//成功了!
    }

    //    删除下标为 n 元素
    public void deleteAtIndex(int n) {
        if (n >= 0 && n < size) {
//            合法,进行处理,取目标索引的前一位
            while (n-- > 1) {
                dummy = dummy.next;
            }
            dummy.next = dummy.next.next;
        }
//        不合规范的不予理会,可以抛个错误的
//        在结尾打印以下链表吧
        printLinkedList(head);//成功了!
    }

}

package 链表.删除链表的倒数第n个节点;

//解法：
//    1. 首先是采用双指针的方式去实现这个算法，同向双指针，快慢指针
//    2. 其次是技巧，快指针先走 n 步，然后慢指针和快指针同步前进，直到快指针指向 null ，这时候慢指针指向的就是需要被删除的元素
//    3. 最后是细节，删除一个节点得知道他之前的一个节点，所以我们让快指针领先 n+1 步，最终 慢指针指向的节点的下一个节点就能被删除了

import 链表.utils.ListNode;

public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
//        首先定义虚拟头节点
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode fast = dummy;//快指针
        ListNode slow = dummy;//慢指针

//        这下面的两种写法是不小心写出来的，一般也能正常执行，但是在边界的情况下会有些问题，例如输入等链表长度会返回null。这其实就是对删除头节点的特殊处理，因为n++了，我们正常遍历肯定会空指针异常，已经到了链表的最后一个节点的下一节点，这和没用虚拟头节点没啥区别，所以要用对虚拟头节点
//        ListNode fast = head;//快指针
//        ListNode slow = head;//慢指针

        n++;//在循环之前先将n自增，让快指针多走一步。如果走完 n 步再让快指针往前一步的话，还得额外判断当前快指针是否为 null，防止空指针异常，这样不如先 n++
        while (n-- > 0) {
            if (fast != null) {

                fast = fast.next;
            } else {
//                表示用户输入的数字大于链表的长度
                return null;
            }
        }
//        这样快指针领先完毕，两个指针一起走
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
//        最终跳出循环了，将慢指针的 next 删掉
        slow.next = slow.next.next;

        return dummy.next;
    }
}

package 链表.两两交换链表中的节点;

//思路：
//    1. 首先是要知道：交换两个节点，要有能够指向这两个节点的指针，这时候可以使用 cur指针 的方式，每次操作两个节点的时候，这个 cur 都指向他们前面一位！也可以不借助 cur 指针，就是边的操作顺序换一下就好了，先操作步骤三
//    2. 其次是要知道退出循环的条件：当链表为奇数时，剩下最后一个节点不需要处理，这时候 cur.next.next = null,而当链表为 偶数 时，cur.next = null, 所以满足以上任何一个就可以退出循环了！！！【注意：】为了防止空指针异常的问题，得先判断 cur.next != null,这和 js 的那种报错一样要注意
//    3. 最后是如何交换的问题：如果按照顺序思维的话，就是分为三步：1. 将指向头节点的指针指向第二个节点，接着是第二个节点的下一个节点指向本来的第一个节点，然后将第一个节点的next指向第三个节点，最后将 cur 指向第三个节点之前的节点（为了操作之后的两个节点）

//    思考：一开始陷入了思考，为什么最后 return dummyhead.next ，dummyhead.next 初始化是 head，我觉得一开始指向的节点已经被 cur 移动到第二个节点了，最后难道不会少了第一个节点吗？不应该初始化为第二个节点吗？
//    解答：想了一下知道大概咋回事了，实际上cur 和 dummy 一开始指向的是同一个节点，cur 在第一次移动的时候就将 next 指向了 新的头节点，cur随着交换一直在变化，但是 dummy 却还是虚拟头节点。最终只需要 return dummy.next 即可，因为这时候的 next 指针指向了新头节点。上面思考的情况是一开始就将头节点的值存了起来，最终return 这个存起来的值，但是实际上最终是重新获取 next，然后return 的


import 链表.utils.ListNode;

public class Solution {
    //    循环的方法
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(-1);//虚拟头节点
        dummy.next = head;//不要忘记指向头节点了
        ListNode cur = dummy;
        ListNode firstNode = null;
        ListNode secondNode = null;
        ListNode tempOut = null;

        while (cur.next != null && cur.next.next != null) {
            firstNode = cur.next;
            secondNode = cur.next.next;
            tempOut = secondNode.next;
//            开始交换
            cur.next = secondNode;//头节点指向第二个节点
            secondNode.next = firstNode;//第二个节点指向第一个节点
            firstNode.next = tempOut;//第一个节点指向第三个节点，至此交换完毕

            cur = firstNode;//修改 cur 指向，用于下一次循环修改
        }
        return dummy.next;
    }
    
}

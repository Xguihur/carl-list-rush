package 链表.两两交换链表中的节点;

//首先看github的介绍以及解题方法，看不太懂再去看视频（细节讲的很清楚），弄懂了就开始写代码：先把思路以及要注意的细节在顶部捋清写下来，然后再写代码测试，多种方法尝试。最后看看有没有必要进行总结

//给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

import 链表.utils.ListNode;
import 链表.utils.ListParent;

public class MySwapPairs extends ListParent {
    public static void main(String[] args) {
        int[] list = {1, 2, 3, 4, 5};
        ListNode head = createLinkedList(list);
//        执行函数 循环的方法
//        Solution solution = new Solution();
//        ListNode result = solution.swapPairs(head);
//        执行函数 递归的方法
        Solution2 solution2 = new Solution2();
        ListNode result = solution2.swapPairs2(head);
//        打印以下结果
        printLinkedList(result);
    }
}

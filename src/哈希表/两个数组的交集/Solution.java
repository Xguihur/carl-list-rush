package 哈希表.两个数组的交集;
//解法：
//    1. 首先数组作为哈希是可行的，但是会浪费大量空间，于是排除用数组。考虑到去重和哈希表，就用 set 比较合适
//    2. 第一个数组用 set 拷贝一遍，然后将第二个数组的每一个元素与这个 set 判断是否包含，如果包含就将这个值存入 结果哈希表 中
//    3. 最后将 结果哈希表 转化为数组返回出去
//    4.（疑惑）：为什么匹配成功之后要存入哈希表中，不能直接存到数组吗？
//    5.（疑惑）：为什么用set再存了一遍，是因为 set 里面的 add 函数和 contains 函数的实现原理是很快的吗？不然我直接用数组二在数组一中匹配不是更好吗？
//GPT解答： 使用哈希表的原因是，哈希表可以在常数时间内实现元素的插入、删除和查找操作，因此可以在线性时间内解决该问题。（如果我用数组匹配的方法，那么每一次查找消耗的时间比哈希表大得多，所以选择哈希表，这也是它的适用场景之一：常数时间内实现元素的插入删除查找）
//GPT解答+自己理解：第四点使用数组的不足之处是我们没办法知道有多少个重复的元素，空间不好定义，可以使用 列表 ArrayList 代替，也可以使用 set代替

//    6. 难点其实是不了解 set 什么情况下使用，得知道 set 的原理和适用场景。其次是它的用法也得了解，得知道java中怎么创建set以及set的一些函数怎么使用
//    7. GPT一开始给的答案是使用 map 操作的，也顺便了解了一下 map 和 set 的区别，它们基本实现是一样的，只是 set 可以去重，map 可以记录重复数据

import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
//        非空判断
        if (nums1 == null || nums1.length == 0 || nums2 == null || nums2.length == 0) return new int[0];
//        逻辑
        Set<Integer> set = new HashSet<>();//为什么里面要用 integer 而不是 int ：GPT：Java中的泛型只能使用引用类型，而不能使用基本数据类型。因此，如果要在集合中存储基本数据类型，需要使用对应的包装类。例如，要存储int类型的数据，可以使用Integer包装类。因此，使用List<Integer>和List<int[]>是正确的，但是使用List<int>是错误的。
        Set<Integer> resset = new HashSet<>();


        for (int i = 0; i < nums1.length; i++) {
            set.add(nums1[i]);
        }
//        匹配
        for (int i = 0; i < nums2.length; i++) {
            if (set.contains(nums2[i])) {
                resset.add(nums2[i]);
            }
        }
//        set转数组 // set 数据结构可以直接 for of 是因为迭代器吗？能不能 for 循环呢
        int j = 0;
        int[] result = new int[resset.size()];
        for (int i : resset) {
            result[j++] = i;
        }
        return result;
    }
}

package 哈希表.快乐数;

//题解：
//    1. 这道题实现起来不难，我认为难的是解题的方法不好想，也就是能找到关键的那几个点：
//        1. 比如说这道题是结果为 1 表示为快乐数，不为 1 则不是快乐数，那就会一直遍历下去，会产生循环
//        2. 当一个数字重复出现的时候，就表示进行了循环，就return false 就好了，这就是难点，难以想到
//        3. 明白了这一点后，这道题就变成了 查找一个表中是否有重复出现的数字，这个表的数据有哪些不确定，由每一位数的平方和决定，但也相当于是在遍历
//    2. 还有一个难点是解题方法的选用，如果我们要快速判断一个元素是否在集合里面，就要使用哈希法
//    3. 另外一个难点是想到要将 一个数字拆分每个位的值 通过算法生成 新的数字进行，写一个方法会很好

import java.util.HashSet;
import java.util.Set;

public class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();

        while (n != 1 && !set.contains(n)) {
            set.add(n);
            n = getNum(n);
        }
        return n == 1;//通过最终的n与1判断是否相等来决定结果，很妙啊这一步
    }

    public int getNum(int num) {
        int sum = 0;
        while (num > 0) {//这里设置 n>0 就隔绝了 负数，是不需要负数的用例吗？
            sum += (num % 10) * (num % 10);
            num = num / 10;
        }
        return sum;
    }
}

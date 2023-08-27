package 哈希表.有效的字母异位词;
//    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//    注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
//提示：
//    1 <= s.length, t.length <= 5 * 104
//    s 和 t 仅包含小写字母

//解题思路：
//1. 可以遍历第一个字符串，将第一个字符串中出现的字符从数组中记录下来，对应位置自增
//2. 这是一个很巧妙的方法，利用Ascll码的连续性将数组变成哈希表来使用，效率非常高
//3. 遍历第二个字符串的时候，出现一个就在数组相应位置自减
//4. 最后遍历这个数组，如果出现不为零的位置，那就表示不是 字母异位词，直接 return false，否则return true

public class Guihur {
    public static void main(String[] args) {
        String s1 = "abcddkhja";
        String s2 = "cbdadjhks";
//        执行函数判断
        Solution solution = new Solution();
        boolean result = solution.isAnagram(s1, s2);
        System.out.println(result);
    }
}

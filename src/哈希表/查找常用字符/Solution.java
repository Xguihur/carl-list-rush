package 哈希表.查找常用字符;

//解题思路：
//    1. 首先明白题目的意思，就是将所有字符串中都出现过的元素挑选出来，重复出现两次的就挑选两个，就这个意思。通俗一些就是所有字符串公共的字符，任何一个没有就不符合。于是我们的方式就是使用 数组 来表示 哈希表 进行打印
//    2. 先遍历第一个字符串，将里面的值用int数组（数组方式的哈希表）记录下来
//    3. 接着遍历第二个字符串，用新的数组记录下来，记录完后（我一开始想的是继续下一个字符串，这样子会创建多个数组不好搞），直接与一开始的数组比对，取最小值给到 第一个数组，那就是我们最终要输出的数组。
//    4. 接下来继续重复第三步，匹配一个字符串完就马上进行比对，这样子能够保证结果一定是所有字符串里出现次数最少的，也就是公共的
//    5. 最后还需要转化一下，将数组上存在记录的值转化为 字符，用字符串数组：List<String> 存放起来，并且输出（因为题目要求输出的是字符串数组，不可能只返回一个数组）

//总结：
//    1. Java的一些方法熟悉了很多，例如 List<String> 和 String[] 的区别：GPT教了我这是字符串列表和字符串数组，后者性能高但是固定大小，不够灵活，前者性能相对差，但是大小不固定，而且有很多方法，操作灵活：add\remove\get\set\size()\indexOf\char
//    2. 测试的时候尝试了 正常用例、错误用例、边界用例的测试，但是速度还是慢了一些，毕竟是学习的过程，慢慢来沉淀挺好的
//    3. 对于这种比对的方法也更加了解了，不需要每一个字符串都搞一个数组，而是一开始就保证结果就是这几个之间最小的，效率提升上来了，时间换空间，这个思想之前也遇到过，现在第二次相遇希望能学会！

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> commonChars(String[] words) {
        List<String> result = new ArrayList<>();//存放结果
//        非空判断
        if (words.length == 0) {
            return result;
        }
//        新建一个保证是所有字符串里面最小值的数组
        int[] hash = new int[26];
        for (int i = 0; i < words[0].length(); i++) {
            hash[words[0].charAt(i) - 'a']++;//这个地方也不熟悉，一开始写的是 words[0][i] 看来还得多练啊，cahrAt 表示的是获取对应索引位置的字符，单引号标识的 'a' 表示字符，如果用双引号标识那就是字符串，字符串和数字运算会报错
        }
//        进行循环，将后续每一个字符串都进行哈希存储，同时与 hash 进行比对取每个字符的最小
        for (int i = 1; i < words.length; i++) {
            int[] othersHash = new int[26];
            for (int j = 0; j < words[i].length(); j++) {
                othersHash[words[i].charAt(j) - 'a']++;
            }
//            比对取最小
            for (int j = 0; j < 26; j++) {
                hash[j] = Math.min(hash[j], othersHash[j]);
            }
        }
//        最终这个 hash 就是记录了重复的字符的一个集合，转化一下
        for (int i = 0; i < 26; i++) {
            while (hash[i] != 0) {
                char c = (char) (i + 'a');//将数字类型强转为字符
                result.add(String.valueOf(c));//这个 String.valueof 是什么意思呢
                hash[i]--;//因为可能这个字符重复了多个，所以添加完后要自减，直到为0
            }
        }

        return result;
    }
}

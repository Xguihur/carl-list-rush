package 哈希表.查找常用字符;
//给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

import java.util.*;

public class Guihur {
    public static void main(String[] args) {
//        成功的用例
        String[] list = {"bella", "label", "roller"};
        String[] list2 = {"cool", "lock", "cook"};
//        错误的用例
        String[] list3 = {"c@", "loc@21k", "c@fook"};//报错：ArrayIndexOutOfBoundsException
//        边界用例
        String[] list4 = {};//直接什么都不打印，进程结束，正常执行
        String[] list5 = {"679", "00027", "678"};//因为有数字的缘故可能，和list3一样的错误
        String[] list6 = {"aaa", "aabad", "acbadas"};//


//        List<String> list = new ArrayList<>();
//        执行函数
        Solution solution = new Solution();
//        List<String> result = solution.commonChars(list);
//        List<String> result = solution.commonChars(list2);
//        List<String> result = solution.commonChars(list3);
//        List<String> result = solution.commonChars(list4);
//        List<String> result = solution.commonChars(list5);
        List<String> result = solution.commonChars(list6);


//        循环打印
        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }
    }
}

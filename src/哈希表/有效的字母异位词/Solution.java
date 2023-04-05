package 哈希表.有效的字母异位词;

import java.sql.Array;

public class Solution {
    public boolean isAnagram(String s, String t) {
//        定义一个空数组，长度为 26，因为全是小写字母
        int[] sArr = new int[26];
//        遍历第一个字符串
        for (int i = 0; i < s.length(); i++) {
            sArr[s.charAt(i) - 'a']++;//这一步绝妙，数组形式的哈希表
        }
//        遍历第二个字符串
        for (int i = 0; i < t.length(); i++) {
            sArr[t.charAt(i) - 'a']--;
        }
//        遍历自己定义的数组，看看是否符合条件
        for (int i = 0; i < 26; i++) {
            if (sArr[i] != 0) {
                return false;
            }
        }
        return true;
    }
}

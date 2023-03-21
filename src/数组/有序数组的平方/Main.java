package 数组.有序数组的平方;

//首先来个暴力解法
//将数组的每个值 平方 ，然后再排序

import java.util.Arrays;

//         给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
//         示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
//         示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
public class Main {
    public static void main(String[] args) {
        int[] nums = {-4, -1, 0, 3, 10};
//        执行函数
        sortedSquares(nums);
    }

    public static int[] sortedSquares(int[] list) {
//        int[] newList = new int[list.length];
//        将数组的每个值 平方 ，然后再排序
        for (int i = 0; i < list.length; i++) {
            list[i] = list[i] * list[i];
        }
        Arrays.sort(list);//升序就这样了，降序有点麻烦，但是也能实现
        for (int j = 0; j < list.length; j++) {
            System.out.println(list[j]);
        }
        return list;
    }


}

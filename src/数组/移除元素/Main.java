package 数组.移除元素;
//暴力解法：两个循环

//      给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
//      不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
//      元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
//      示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
//      示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
//      你不需要考虑数组中超出新长度后面的元素。

public class Main {
    public static void main(String[] args) {
        int[] nums = {0, 1, 2, 2, 3, 0, 4, 2};
        int val = 3;
//        调用函数
        int res = getNewLength(nums, 3);
        System.out.println("长度" + res);
        System.out.println(nums);
    }

    public static int getNewLength(int[] list, int number) {
        int length = list.length;
        if (length == 0) {
            return 0;
        }
//        用两个for循环暴力解决：如果找到了指定元素，就用第二个循环控制后面的数字全部往前移动一位
        for (int i = 0; i < length; i++) {
            if (list[i] == number) {
                for (int j = i + 1; j < length; j++) {
                    list[j - 1] = list[j];
                }
                i--;//因为全部往左移动了一位，所以 i 也回到之前的位置继续遍历
                length--;//长度也 - 1
            }
        }
        return length;
    }
}

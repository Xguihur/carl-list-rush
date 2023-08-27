package 数组.移除元素;
//双指针：快慢指针

//      给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
//      不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
//      元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
//      示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
//      示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
//      你不需要考虑数组中超出新长度后面的元素。

public class Main2 {
    //     慢指针用来控制赋值，快指针用来遍历数组
    //     遍历（扫描）数组的过程中，如果快指针指向的值与目标不相同，则慢指针的值等于快指针的值，两者同时自增1
    //     如果快指针指向的值与目标相同，那就慢指针不变，快指针自增1继续扫描
    //     最终满指针指向的地方 就是数组的长度

    public static void main(String[] args) {
        int[] nums = {0, 1, 2, 2, 3, 0, 4, 2};
        int val = 3;
//        执行函数
        int result = removeElement(nums, 2);
        System.out.println(result);
    }

    public static int removeElement(int[] list, int number) {
        int slow = 0;
        for (int fast = 0; fast < list.length; fast++) {
//            if (list[fast] == number) {
//                continue;// slow 不变，fast++
//            } else {
//                list[slow] = list[fast];
//                slow++;
//            }
//            优化一下代码
            if (list[fast] != number) {
                list[slow++] = list[fast];
            }
        }
        return slow;//长度就是 slow 指向的位置 ,因为slow++了之后等待填坑，直到最后也没有被填上，那就是长度了
    }
}

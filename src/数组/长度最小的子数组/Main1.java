package 数组.长度最小的子数组;
//滑动窗口解法：
//自己写的这个函数的参数，第一个是数组，第二个是待寻找的值。力扣上是先传值再传数组，如果要提交注意一下，不然一直报错！

//关键点：
//    起始指针以及末尾指针
//    一个存放当前符合长度的最小子串长度
//    一个值存放当前字串中所有的元素和，与目标 s 比较
//    在找到符合条件的时候，将当前子串的长度与最终的那个长度比较取最小值，之后起始位置向前移动，sum减去起始位置那个元素值
//    注意：题目重点是 连续的子数组，这就可以使用滑动窗口，如果是不连续的那就不能使用了

//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
//        示例：
//        输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
//        提示：
//        1 <= target <= 10^9
//        1 <= nums.length <= 10^5
//        1 <= nums[i] <= 10^5

public class Main1 {
    public static void main(String[] args) {
        int[] nums = {6, 1, 1, 2, 2, 3};
        int s = 8;
//        执行函数
        int resull = minSubArrayLen(nums, s);
        System.out.println(resull);
    }

    public static int minSubArrayLen(int[] list, int s) {
//        int j = 0;//终止指针
        int i = 0;//起始指针
        int subLength = 0;
        int result = list.length + 1;//取最大，用来和任意一个匹配到的字串做比较，如果最终还是这个值表示没有匹配到合适的字串，直接return 0 就好
        int sum = 0;//字串总和

        for (int j = 0; j < list.length; j++) {
            sum += list[j];
            while (sum >= s) {
                subLength = j - i + 1;
                result = Math.min(result, subLength);//取最小值给结果
//                存完值之后，起始指针要往后移动了，直到取到不符合条件的情况再继续移动 终止指针去寻找符合条件的字串
                sum -= list[i];
                i++;
            }
        }
//        没有匹配到字串的情况
        if (result > list.length) {
            return 0;
        }
        return result; // 此时 result 保存的就是最小符合字串的长度

    }
}

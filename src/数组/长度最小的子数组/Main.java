package 数组.长度最小的子数组;
//试一下暴力的方法
//简单的基本能过，力扣前18道用例能过，最后一个超大数据的直接超时了... 总结就是过不了力扣，虽然我感觉这个暴力的算法也不算复杂哈哈哈

public class Main {
    public static void main(String[] args) {
        int[] nums = {2, 3, 5, 2, 2, 3};
        int s = 8;
//        执行函数
        int resull = minSubArrayLen(nums, s);
        System.out.println(resull);
    }

    public static int minSubArrayLen(int[] list, int s) {
//        用两个for循环，第一个控制头，第二个控制尾，将所有的都遍历一遍
        int result = list.length + 1;
        for (int i = 0; i < list.length; i++) {
            int sum = 0;//每一次循环都创建一个 sum 积累值
            for (int j = i; j < list.length; j++) {
                sum += list[j];
                if (sum >= s) {
//                    当总值大于时，后面就不用再遍历了，直接返回值
                    int subLength = j - i + 1;
                    result = Math.min(result, subLength);
                    break;
                }
            }
        }
        if (result > list.length) {
            return 0;
        }
        return result;

    }
}

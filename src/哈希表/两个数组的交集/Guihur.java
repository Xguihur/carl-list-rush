package 哈希表.两个数组的交集;

//给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
//1 <= nums1.length, nums2.length <= 1000
//0 <= nums1[i], nums2[i] <= 1000//这个表示数据长度是有限的，可以使用数组作为哈希表来使用，但是数据太分散了会造成很大的空间浪费

public class Guihur {
    public static void main(String[] args) {
        int[] arr1 = {4, 9, 5};
        int[] arr2 = {9, 4, 9, 8, 4};
//        执行函数
        Solution solution = new Solution();
        int[] result = solution.intersection(arr1, arr2);
        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }
    }
}

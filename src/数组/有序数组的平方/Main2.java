package 数组.有序数组的平方;

//双向指针的解法：
//   因为本来就是有序的，考虑负数的情况，所以最大的一定在左右两边
//   搞个新的数组，通过比较两边数组的平方谁大，依次加入新数组的尾部
//   边界得考虑一下，当 left<=right 的时候继续循环，因为等于的情况当前指向的值还没加入到数组中

public class Main2 {
    public static void main(String[] args) {
        int[] nums = {-17, -4, -2, -1, 0, 3, 10, 19};
//        执行函数
        int[] result = sortedSquares(nums);
        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }
    }

    public static int[] sortedSquares(int[] list) {

        int[] newList = new int[list.length];
        int point = list.length - 1;//新数组的索引
//        int left = 0;//旧数组的左
//        int right = point;//旧数组的右

        for (int left = 0, right = point; left <= right; ) {
            if (list[left] * list[left] < list[right] * list[right]) {
                newList[point--] = list[right] * list[right--];
//                point--;
//                right--
            } else {
//                无论是大于还是等于，都取左边即可。因为值等于的情况取左还是取右都一样
                newList[point--] = list[left] * list[left++];
//                point--;
//                left++
            }
        }
        return newList;
    }
}

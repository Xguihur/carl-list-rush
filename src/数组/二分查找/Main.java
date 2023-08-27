package 数组.二分查找;

//        左闭右闭
public class Main {
    //    给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
    public static void main(String[] args) {
        int[] list = {-1, 1, 2, 3, 4, 5, 8, 9, 39};//简化的格式
//        int[] list = new int[]{-1, 2, 3, 4, 5, 8, 9, 39};//完整的格式
        System.out.println(getIndex(list, 99));
    }

    public static int getIndex(int[] list, int number) {

//        循环条件： left <= right   mid的取值：(left+right)/2 || left+(right-left)/2   right的移动：right = mid-1
//        循环之前要先判断边界，不在区间内的话直接return 即可
        if (number < list[0] || number > list[list.length - 1]) {
            return -1;
        }
        int left = 0;
        int right = list.length - 1;
        int mid = (left + right) / 2;// ‘/’自动向下取整
        while (left <= right) {
            if (list[mid] < number) {
                left = mid + 1;
                mid = (left + right) / 2;
            } else if (list[mid] > number) {
                right = mid - 1;
                mid = (left + right) / 2;
            } else {
//                相等的情况
//                System.out.println(mid);
                return mid;
            }
        }
        return -1;
    }
}

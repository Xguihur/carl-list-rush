package 数组.二分查找;

//        左闭右开
public class Main2 {
    //    给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
    public static void main(String[] args) {
        int[] list = {-1, 1, 2, 3, 4, 5, 8, 9, 39};//简化的格式
//        int[] list = new int[]{-1, 2, 3, 4, 5, 8, 9, 39};//完整的格式
        System.out.println(getIndex(list, 9));
    }

    public static int getIndex(int[] list, int number) {

//        循环条件：
//          left < right（因为不需要取到右边了，当left=right就意味着可以退出了）
//          mid的取值：(left+right)/2 || left+(right-left)/2
//          right的移动：right = mid （也是因为 mid 不需要被取到，右开的情况下 right=mid 就好，如果还 -1 就会丢失最后一个的数）
//          初始化的时候 right 也要等于 list.length  （同理）
//        循环之前要先判断边界，不在区间内的话直接return 即可
        if (number < list[0] || number > list[list.length - 1]) {
            return -1;
        }
        int left = 0;
        int right = list.length;
        int mid = (left + right) / 2;// ‘/’自动向下取整
        while (left < right) {
            if (list[mid] < number) {
                left = mid + 1;
                mid = (left + right) / 2;
            } else if (list[mid] > number) {
                right = mid;
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

package 数组.移除元素;
//双指针：双向指针

import jdk.nashorn.internal.runtime.Debug;

public class Main3 {
//    因为题目说不在乎顺序，所以可以考虑使用双向指针的方式
//    头指针用来寻找目标值，尾指针用来寻找非目标值
//    当头指针指向的值等于目标值时，与尾指针指向的值进行交换
//    退出循环的条件是尾指针与头指针重合，指向最后一个非目标的值
//    所以新数组的长度就是退出循环时 头指针（尾指针）+1

    public static void main(String[] args) {
//        int[] nums = {0, 1, 2, 2, 3, 0, 4, 2};
        int[] nums = {2, 2, 2, 2, 2, 2, 2, 2};

        int val = 3;
        //        执行函数
        int result = removeElement(nums, 2);
        System.out.println(result);
    }

//    一开始的思路，不太周到 --- 直接参考题解好了
    
//    public static int removeElement(int[] list, int number) {
////        不能少了空的判断，不然 tail 可能是 -1,但是也不好判断
//        if (list.length == 0) return 0;
//        int head = 0;
//        int tail = list.length - 1;
//
////        一开始是想避免在循环内继续循环找尾部不等于目标的值，但是后来发现必须在内部循环查找，因为可能字串里面还有连续等于目标值的
//        while (list[tail] == number) {
//            tail--;
//        }
//        while (head <= tail) {
//            if (list[head] == number) {
//                list[head] = list[tail];
//                tail--;
//            }
//            while (list[tail] == number) {
//                tail--;
//            }
////            无论是否相等，head都自增1，继续往后遍历
//            head++;
//        }
//        return head;
//    }

    //    题解的做法，自己的还待优化
    public static int removeElement(int[] list, int number) {
        int head = 0;
        int tail = list.length - 1;
//        可以通过 head<=tail 来进行判断
        while (head <= tail) {
//            找左边等于number的下标
            while (head <= tail && list[head] != number) {
                ++head;
            }
            //            找右边不等于number的下标
            while (head <= tail && list[tail] == number) {
                --tail;
            }

            // 将右边不等于val的元素覆盖左边等于val的元素
            if (head < tail) {
                list[head] = list[tail];
                head++;
                tail--;
            }
        }
        return head;
    }
}

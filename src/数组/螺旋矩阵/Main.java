package 数组.螺旋矩阵;
//不涉及算法，只是模拟这个过程，重点是掌握：循环不变量 这个关键词！

//看了思路脑子会了，接下来书写就是先 把变量列举出来再去写具体实现，知道哪些变量有什么作用

//        给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
//        示例:
//        输入: 3 输出:
//        [ [ 1, 2, 3 ],
//        [   8, 9, 4 ],
//        [   7, 6, 5 ] ]

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int n = 5;
//        执行函数
        int[][] arr2W = generateMatrix(n);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("%d\t", arr2W[i][j]); // 使用 printf 来控制输出
            }
            System.out.println();//输出空行
        }
//        for (int[] date : arr2W) {
//            for (int result : date) {
//                System.out.printf("%d\t", result);
//            }
//            System.out.println();
//        }

    }

    public static int[][] generateMatrix(int n) {
        int[][] list = new int[n][n];// 定义一个二维数组用来模拟圈数
        int loop = n / 2;// 一共有几圈，用来控制循环次数的，如果 n 为 奇数，那中间就会有一个独立的不成圈
        int mid = n / 2;// 如果为奇数，那么中间的那一个位置就是 n/2,n/2 ，最后将 最后一个值赋给它就好了
        int startx = 0;// 用于初始化每一圈的 x 初始位置
        int starty = 0;// 用于初始化每一圈的 x 初始位置
        int offset = 1;// 用于限制每一条边的遍历长度，通过 n-offset 实现，为了满足循环不变量，使用左闭右开的方式
        int count = 1;// 用于记录每一个位置存放的值，是递增的

//        开始循环赋值了
        while (0 < loop--) {//如果 loop 不等于0，则代表还需要循环,每循环一圈就递减一次
//            移动顺序是 左上 -》右上-》右下-》左下-》左上，其他也可以自己把控
//            因为要保证左闭右开，所以不适用 j<n 而是 j<n-offet
//            左上--》右上
            System.out.println("进入循环了");
            int j = starty;//不知道Java为啥不能在for里面使用这个表达式，拿不到 starty
            for (; j < n - offset; j++) {
                list[startx][j] = count++;
            }
//            右上--》右下
            int i = startx;
            for (; i < n - offset; i++) {
                list[i][j] = count++;
            }
//            右下--》左下
            for (; j > starty; j--) {
                list[i][j] = count++;
            }
//            左下--》左上
            for (; i > startx; i--) {
                list[i][j] = count++;
            }
//            最后 startx 与 starty 要 +1，设置下一圈的初始位置，同时offset 也要 +1，边界也往前推。也就是起始和终止一起缩小一圈
            startx++;
            starty++;
            offset++;
        }
//        最后判断 n 是否为 奇数，如果是的话就将中间的特殊值 手动赋一下
        if (n % 2 == 1) {
            list[mid][mid] = count;
        }

        System.out.println("执行结束了");
        return list;
    }
}

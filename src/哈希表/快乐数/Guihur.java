package 哈希表.快乐数;

//编写一个算法来判断一个数 n 是不是快乐数。
//        「快乐数」定义为：
//        对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
//        然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
//        如果这个过程 结果为1，那么这个数就是快乐数。
//        如果 n 是 快乐数 就返回 true ；不是，则返回 false 。


public class Guihur {
    public static void main(String[] args) {
        int n = 19;//正确的用例
        int m = 2;//失败的用例
        int a = -19;//奇怪的用例 直接 false 了。因为在 求余的那里直接排除了负数
//        执行函数测试
        Solution solution = new Solution();
        boolean res = solution.isHappy(a);
        System.out.println(res);
    }
}

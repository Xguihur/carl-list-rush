package 链表.设计链表;
//难点在于 n 的判断不要乱,一开始选择不使用 虚拟头节点,那就一直贯彻,不要换来换去
//后面每次循环判断要注意 n 的取值

//删除节点和在目标前添加节点 这两种情况都是索引到 n 的前一位的
//取索引值,尾插,以及头插(这个有点特殊),其本质都是索引到 n 的位置

public class main {
    public main(String[] args) {
        //new test1();
        MyLinkedList1 MyLinkedList = new MyLinkedList1();

//        System.out.println(MyLinkedList.get(1));
//        MyLinkedList.addAtIndex(3, 99);//在指定位置前添加节点
//        MyLinkedList.addAtHead(88);//添加头节点
//        MyLinkedList.addAtTail(66);//添加尾节点
//        MyLinkedList.deleteAtIndex(2);//删除指定位置节点
    }
}

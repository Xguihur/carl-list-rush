const arr = [1, 2, 3, 4, 5, 6, 7, 8]
//转化一下，获得 head 先,需要先导入 translate_arrToListNode 这个函数

class ListNode {
  val
  next
  constructor(val, next) {
    // 如果不传或者少传，默认设置为-1 && null
    this.val = val ?? -1
    this.next = next ?? null
  }
}

// 转化函数
const translate_arrToListNode = arr => {
  let head = new ListNode() // 初始化一个虚拟头节点
  let cur = head
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head.next // 将转化好的 链表头节点 return 出去
}

const head = translate_arrToListNode(arr)

var reverseList = function (head) {
  const reverse = (pre, cur) => {
    if (!cur) return pre
    const temp = cur.next
    cur.next = pre
    return reverse(cur, temp)
  }
  return reverse(null, head)
}
console.log(reverseList(head))

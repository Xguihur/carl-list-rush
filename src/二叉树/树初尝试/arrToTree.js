class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 将数组转换为链表表示的树
function arrayToTree(arr) {
  if (arr.length === 0) {
    return null
  }

  const root = new TreeNode(arr[0])
  const queue = [root]
  let i = 1

  while (i < arr.length) {
    const node = queue.shift() //这里使用 shift 是将数组顶部的节点弹出，然后给它左右子树赋值，重点是已经弹出了，下次同样的方法获取的是右子树啦！（很妙的二叉树生成方法，使用队列的方式 将数组转化为链表）

    // 处理左子节点
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    i++

    // 处理右子节点
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i])
      queue.push(node.right)
    }
    i++
  }

  return root
}

// 将链表表示转化为数组表示的树
function treeToArray(tree) {
  const result = [] //最终用来表示 树 的 数组
  const queue = [] //使用 栈 模拟队列
  if (!tree) {
    return result
  }
  // // 使用层次遍历将树还原为数组  依然是借助队列的方式，这个概念太强大了
  queue.push(tree)

  while (queue.length > 0) {
    const tempNode = queue.shift() //取数组的头部
    // 因为从 链表 转化为 数组 遇到空不能不处理，得标识在数组上，于是这里需要特殊处理 null 的情况
    if (tempNode === null) {
      // 目前的写法是如果这个值是 null 那么就直接加入到 结果 数组中，但是不知道要不要把它也加入到 queue 中，如果要的话不能直接加，得考虑叶子节点是否全为 null，如果是则不继续添加，会变得很麻烦
      // 从 力扣 的测试用例看出是不需要继续加到 queue 中的，那自己可以就按照这个来了
      result.push(tempNode)
      continue //这里要用 continue 而不是用 return，否则会直接跳出循环的
    }
    result.push(tempNode.val)
    if (tempNode.left) {
      queue.push(tempNode.left)
    } else {
      // 如果左子树根节点为空，则将 null 传入队列进行处理
      queue.push(null)
    }
    if (tempNode.right) {
      queue.push(tempNode.right)
    } else {
      queue.push(null)
    }
  }
  // 最终 result 数组中的节点即表示为树
  return result
}

// 示例用法
const arr = [1, 2, 3, 4, null, 5, 6]
const tree = arrayToTree(arr)

console.log('数组转链表：', tree)

const myArray = treeToArray(tree)
console.log('链表转数组：', myArray)

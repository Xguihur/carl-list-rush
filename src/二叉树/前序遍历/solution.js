// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历
import { arrayToTree, treeToArray } from '../index.js'

const list = [1, null, 2, 3]
// 数组转链表
const root = arrayToTree(list)

// 核心代码
var preorderTraversal = function (root) {
  const result = []
  traversal(root, result)
  console.log(result)
  return result
}

var traversal = function (tree, result) {
  if (!tree) return
  result.push(tree.val)
  traversal(tree.left, result)
  traversal(tree.right, result)
}

// 链表转数组  这题不需要转数组就能看结果了
// const myResult = treeToArray()
preorderTraversal(root)

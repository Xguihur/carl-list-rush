class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = val ?? null
  }
}

const tree = new TreeNode(1, new TreeNode(2))

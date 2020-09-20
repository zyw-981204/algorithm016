//给定一个二叉树，返回它的中序 遍历。 
//
// 示例: 
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [1,3,2] 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 哈希表 
// 👍 711 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @name inorderTraversal
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */
// 迭代
// Time complexity: O(N) Space complexity: O(N)
const inorderTraversal = (root) => {
  let res = [], stack = []
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}


// 递归
// Time complexity: O(N) Space complexity: O(N)
const inorderTraversal = (root) => {
  let res = []
  const dfs = (node) => {
    if (!node) return node
    node.left && dfs(node.left)
    res.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)
  return res
}


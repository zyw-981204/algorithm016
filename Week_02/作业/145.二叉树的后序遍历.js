//给定一个二叉树，返回它的 后序 遍历。 
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
//输出: [3,2,1] 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 
// 👍 397 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * @name postorderTraversal
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 迭代
const postorderTraversal = (root) => {
  let stack = [], res = []
  root && stack.push(root)
  // 后序遍历的顺序是左右中 又因为是shift 所以正确出栈顺序是中右左 所以入栈顺序为左右
  while (stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    root.left && stack.push(root.left)
    root.right && stack.push(root.right)
  }
  return res
}
// 递归
const postorderTraversal = (root) => {
  let stack = [], res = []
  const dfs = (node) => {
    node.left && dfs(node.left)
    node.right && dfs(node.right)
    res.push(node.val)
  }
  root && dfs(root)
  return res
}


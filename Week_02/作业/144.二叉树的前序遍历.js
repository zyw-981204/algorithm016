//给定一个二叉树，返回它的 前序 遍历。 
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
//输出: [1,2,3]
// 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 
// 👍 367 👎 0

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
 * @name preorderTraversal
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */


// 迭代 使用栈模拟递归
const preorderTraversal = (root) => {
  let stack = [], res = []
  root && stack.push(root)
  while (stack.length) {
    root = stack.pop()
    res.push(root.val)
    // 前序遍历 顺序为中左右
    // 但是由于栈是先进后出 所以先让右入栈再让左入栈  为先序遍历的正确顺序
    root.right && stack.push(root.right)
    root.left && stack.push(root.left)
  }
  return res
}

// 递归
const preorderTraversal = (root) => {
  let res = []
  const dfs = (root) => {
    if (!root) return
    res.push(root.val)
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  dfs(root)
  return res
}
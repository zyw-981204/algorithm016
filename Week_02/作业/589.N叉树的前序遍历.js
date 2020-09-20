//给定一个 N 叉树，返回其节点值的前序遍历。 
//
// 例如，给定一个 3叉树 : 
//
// 
//
// 
//
// 
//
// 返回其前序遍历: [1,3,5,6,2,4]。 
//
// 
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗? Related Topics 树 
// 👍 101 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * @name preorder
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 递归
// Time complexity: O(N) Space complexity: O(N)
const preorder = (root) => {
  let res = []
  const dfs = (node) => {
    if (!node) return node
    res.push(node.val)
    for (let s of node.children) {
      dfs(s)
    }
  }
  dfs(root)
  return res
}
// 迭代
// Time complexity: O(N) Space complexity: O(N)
const preorder = (root) => {
  let stack = [], res = []
  root && stack.push(root)
  while (stack.length) {
    root = stack.pop()
    res.push(root.val)
    root.children && stack.push(...root.children.reverse())
  }
  return res
}

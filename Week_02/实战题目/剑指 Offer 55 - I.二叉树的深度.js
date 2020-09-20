//输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。 
//
// 例如： 
//
// 给定二叉树 [3,9,20,null,null,15,7]， 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7 
//
// 返回它的最大深度 3 。 
//
// 
//
// 提示： 
//
// 
// 节点总数 <= 10000 
// 
//
// 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tre
//e/ 
// Related Topics 树 深度优先搜索 
// 👍 52 👎 0

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
 * @return {number}
 * @name maxDepth
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */
  // 递归
const maxDepth = (root) => {
    const getHeight = (node) => {
      if (!node) return 0
      else return Math.max(getHeight(node.left), getHeight(node.right)) + 1
    }
    return getHeight(root)
  }

// 层序遍历
const maxDepth = (root) => {
  if (!root) return 0
  let q = [], res = 0, visited = new Set()
  q.push(root)
  while (q.length) {
    let lv = q.length
    res++
    for (let i = 1; i <= lv; i++) {
      let cur = q.shift()
      if (!visited.has(cur)) {
        visited.add(cur)
        cur.left && q.push(cur.left)
        cur.right && q.push(cur.right)
      } else continue
    }
  }
  return res
}

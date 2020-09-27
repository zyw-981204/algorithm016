//根据一棵树的中序遍历与后序遍历构造二叉树。 
//
// 注意: 
//你可以假设树中没有重复的元素。 
//
// 例如，给出 
//
// 中序遍历 inorder = [9,3,15,20,7]
//后序遍历 postorder = [9,15,7,20,3] 
//
// 返回如下的二叉树： 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
// 
// Related Topics 树 深度优先搜索 数组 
// 👍 375 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null
  let len = postorder.length
  let index = inorder.indexOf(postorder[len - 1])
  let nh = new TreeNode(postorder[len - 1])
  // 注意各个子树对应的位置
  nh.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  nh.right = buildTree(inorder.slice(1 + index), /* 右子树的后序需要特别注意*/postorder.slice(index, len - 1))
  return nh
}
//leetcode submit region end(Prohibit modification and deletion)

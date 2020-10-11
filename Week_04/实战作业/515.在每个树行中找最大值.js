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
var largestValues = function (root) {
  let q = [],res = [];
  root && q.push(root);
  while (q.length) {
    let node = [], max = -Infinity;
    for (let i of q) {
      max = Math.max(i.val, max);
      i.left && node.push(i.left)
      i.right && node.push(i.right)
    }
    q = node;
    res.push(max)
  }
  return res
};
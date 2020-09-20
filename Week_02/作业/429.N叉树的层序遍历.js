//给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。 
//
// 例如，给定一个 3叉树 : 
//
// 
//
// 
//
// 
//
// 返回其层序遍历: 
//
// [
//     [1],
//     [3,2,4],
//     [5,6]
//]
// 
//
// 
//
// 说明: 
//
// 
// 树的深度不会超过 1000。 
// 树的节点总数不会超过 5000。 
// Related Topics 树 广度优先搜索 
// 👍 109 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 * @name levelOrder
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */
// Time complexity: O(N) Space complexity: O(N)
// 迭代
const levelOrder = (root) => {
  let q = [], res = [], visited = new Set()
  root && q.push(root)
  while (q.length) {
    // while每循环一次 都表示进行一层的更新
    res.push([])
    let sz = q.length
    for (let i = 0; i < sz; i++) {
      root = q.shift()
      // 判断是否访问过
      if (!visited.has(root)) {
        res[res.length - 1].push(root.val)
        visited.add(root)
        // 将子节点推入队列中
        root.children && q.push(...root.children)
      }
    }
  }
  return res
}


//给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。 
//
// 示例: 
//
// 输入: n = 4, k = 2
//输出:
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//] 
// Related Topics 回溯算法 
// 👍 401 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = []
  const dfs = (cur, path) => {
    if (path.length === k) {
      res.push(path.slice())
      return
    }
    dfs(cur + 1, path)
    path.push(cur)
    dfs(cur + 1, path)
    path.pop()
  }
  dfs(1, [])
  return res
}

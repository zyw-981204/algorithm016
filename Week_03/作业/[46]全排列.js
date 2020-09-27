//给定一个 没有重复 数字的序列，返回其所有可能的全排列。 
//
// 示例: 
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//] 
// Related Topics 回溯算法 
// 👍 921 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) return [];
  let res = [];
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path.slice())
      return;
    }
    for (let i of nums) {
      if(!path.includes(i)) {
        path.push(i)
        dfs(path)
        path.pop()
      }
    }
  }
  dfs([])
  return res
}
//leetcode submit region end(Prohibit modification and deletion)

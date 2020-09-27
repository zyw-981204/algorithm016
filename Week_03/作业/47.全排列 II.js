//给定一个可包含重复数字的序列，返回所有不重复的全排列。 
//
// 示例: 
//
// 输入: [1,1,2]
//输出:
//[
//  [1,1,2],
//  [1,2,1],
//  [2,1,1]
//] 
// Related Topics 回溯算法 
// 👍 473 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [], map = Array(nums.length).fill(false)
  if (!nums.length) return []
  const dfs = (path, map, level) => {
    if (path.length >= nums.length) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (map[i] || (!map[i - 1] && nums[i] === nums[i - 1] && (i > 0))) continue
      path.push(nums[i])
      map[i] = true
      dfs(path, map, level + 1)
      map[i] = false
      path.pop()
    }
  }
  nums.sort((a, b) => a - b)
  dfs([], map, 0)
  return res
}
//leetcode submit region end(Prohibit modification and deletion)

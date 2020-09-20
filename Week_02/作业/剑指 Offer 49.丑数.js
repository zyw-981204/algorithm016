//我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。 
//
// 
//
// 示例: 
//
// 输入: n = 10
//输出: 12
//解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。 
//
// 说明: 
//
// 
// 1 是丑数。 
// n 不超过1690。 
// 
//
// 注意：本题与主站 264 题相同：https://leetcode-cn.com/problems/ugly-number-ii/ 
// Related Topics 数学 
// 👍 72 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 * @name nthUglyNumber
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */
// 动态规划
// Time complexity: O(N) Space complexity: O(N)
const nthUglyNumber = (n) => {
  let dp = [1], a = 0, b = 0, c = 0
  for (let i = 1; i < n; i++) {
    // 递推公式
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5)
    // 需要同时检测,而不是只要单一检测,可能会出现dp[a] * 2 === dp[b] * 3的情况
    dp[a] * 2 <= dp[i] ? a++ : 0
    dp[b] * 3 <= dp[i] ? b++ : 0
    dp[c] * 5 <= dp[i] ? c++ : 0
  }
  return dp[n - 1]
}


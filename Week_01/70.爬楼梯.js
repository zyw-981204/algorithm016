/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} 
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1, dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end
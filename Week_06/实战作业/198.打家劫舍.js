/**
 * 1. 分治,子问题
 * 2. 定义状态数组
 *   a. dp[i] 从0 - i能够偷到最多的钱, i可偷可不偷，分别求最大值。
 *   b. dp[i] = Math.max(dp[i -2] + num[i], dp[i - 1])
 *
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 1) return n === 0 ? 0 : nums[0];
  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] +nums[i], dp[i - 1]);
  }
  return dp[n - 1]
};
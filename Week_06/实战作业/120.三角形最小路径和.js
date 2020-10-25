var minimumTotal = function (triangle) {
  const dp = triangle;
  const m = dp.length;
  for (let i = m - 2; i >= 0; i--) {
    // 这边不需要自前而后迭代
    for (let j = 0; j <= dp[i].length - 1; j++) {
      dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }
  return dp[0][0]
};
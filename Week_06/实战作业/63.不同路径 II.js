const uniquePathsWithObstacles = (obstacleGrid) => {
  const m = obstacleGrid.length, n = obstacleGrid[0].length
  if (obstacleGrid[0][0]) return 0
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  dp[0][0] = 1
  // 如果前面是障碍物或者前面那个的次数为0则这个也走不通
  for (let i = 1; i < n; i++) dp[0][i] = obstacleGrid[0][i] || !dp[0][i - 1] ? 0 : 1
  for (let i = 1; i < m; i++) dp[i][0] = obstacleGrid[i][0] || !dp[i - 1][0] ? 0 : 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 看当前这个地方是否是障碍物，如果是障碍物则为0，不然为左边和上边的次数相加
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}



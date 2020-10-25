const uniquePaths = (m, n) => {
  // 初始化二维数组
  let dp = new Array(m)
  // 填充初始值
  for (let j = 0; j < m; j++) {
    dp[j] = new Array(n)
    dp[j][n - 1] = 1
  }
  for (let i = 0; i < n; i++) dp[m - 1][i] = 1

  // 自下而上递推
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
    }
  }
  // 返回结果
  return dp[0][0]
}
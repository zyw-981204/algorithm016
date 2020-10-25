// 方法一，递归生成左边的所有子序列看在2中是否是子序列
// 方法二，转换成子问题
var longestCommonSubsequence = function (text1, text2) {
  // 初始化数组
  const m = text1.length, n = text2.length;
  // 初始化n + 1 * m + 1的二维数组
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  // 用下列方法初始化数组时,由于fill是对数组的引用,所以会互相影响
  // const dp = new Array(m + 1).fill(new Array(n + 1).fill(0));
  // 从第一个字符串开始判断
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //如果最后一个字母相同则为s1[-1],s2[-1]两个最长公共子串+1
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      // 不然的话，就是s1[-1],s2的公共子串或s1,s2[-1]的公共子串的较大值
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  // 返回数组的最后一个
  return dp[m][n]
};
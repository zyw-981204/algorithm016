/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 * @name generate
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const generate = (numRows) => {
  // 边界判断
  if (!numRows) return []
  let res = []
  // 顶层为第0层 i表示当前层数
  for (let i = 0; i < numRows; i++) {
    let temp = []
    // 每层有i+1个数 正好是0 - i 记得取等号
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) temp.push(1)
      // 本层的中间的数为上一层前一个数加上对应的数
      else temp.push(res[i - 1][j] + res[i - 1][j - 1])
    }
    res.push(temp)
  }
  return res
}
// @lc code=end
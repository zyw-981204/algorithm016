//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。 
//
// 
//
// 上图为 8 皇后问题的一种解法。 
//
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。 
//
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。 
//
// 
//
// 示例： 
//
// 输入：4
//输出：[
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],
//
// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
//解释: 4 皇后问题存在两个不同的解法。
// 
//
// 
//
// 提示： 
//
// 
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。 
// 
// Related Topics 回溯算法 
// 👍 619 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n)
  // 初始化棋盘
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  const res = []
  const cols = new Set()
  const diag1 = new Set()
  const diag2 = new Set()
  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'Q' && (j === col || i + j === row + col || i - j === row - col)) return false
      }
    }
    return true
  }
  const dfs = (row) => {
    if (row === n) {
      const copy = board.slice()
      for (let i = 0; i < n; i++) {
        copy[i] = copy[i].join('')
      }
      res.push(copy)
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q'
        cols.add(col);
        diag1.add(row + col);
        diag2.add(row - col);
        dfs(row + 1)
        board[row][col] = '.'
        cols.delete(col);
        diag1.delete(row + col);
        diag2.delete(row - col);

      }
    }
  }
  dfs(0)
  return res
}
//leetcode submit region end(Prohibit modification and deletion)

//编写一个程序，通过填充空格来解决数独问题。 
//
// 一个数独的解法需遵循如下规则： 
//
// 
// 数字 1-9 在每一行只能出现一次。 
// 数字 1-9 在每一列只能出现一次。 
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。 
// 
//
// 空白格用 '.' 表示。 
//
// 
//
// 一个数独。 
//
// 
//
// 答案被标成红色。 
//
// 提示： 
//
// 
// 给定的数独序列只包含数字 1-9 和字符 '.' 。 
// 你可以假设给定的数独只有唯一解。 
// 给定数独永远是 9x9 形式的。 
// 
// Related Topics 哈希表 回溯算法 
// 👍 639 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @name solveSudoku
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */



// const solveSudoku = (board) => {
//   const hasConflit = (r, c, val) => {  // 判断是否有行列和框框的冲突
//     for (let i = 0; i < 9; i++) {
//       if (board[i][c] == val || board[r][i] == val) { // 行或列里有冲突
//         return true;
//       }
//     }
//     const subRowStart = Math.floor(r / 3) * 3; // 对于小框，行有三种起始索引 0、3、6
//     const subColStart = Math.floor(c / 3) * 3; // 对于小框，列有三种起始索引 0、3、6
//     for (let i = 0; i < 3; i++) {              // 遍历所在的小框
//       for (let j = 0; j < 3; j++) {
//         if (val == board[subRowStart + i][subColStart + j]) { // 发现了重复数
//           return true;
//         }
//       }
//     }
//     return false; // 没有发生冲突
//   };
//
//   const fill = (i, j) => {
//     if (j == 9) {              // 列越界，填完一行，填下一行
//       i++;
//       j = 0;
//       if (i == 9) return true; // 都填完了，返回true
//     }
//     if (board[i][j] != ".") return fill(i, j + 1); // 不是空白格，递归填下一格
//
//     for (let num = 1; num <= 9; num++) {           // 枚举出当前格的所有可填的选择
//       if (hasConflit(i, j, String(num))) continue; // 如果存在冲突，跳过这个选择
//       board[i][j] = String(num);                   // 作出一个选择
//       if (fill(i, j + 1)) return true; // 如果基于它，填下一格，最后可以解出数独，直接返回true
//       board[i][j] = ".";               // 如果基于它，填下一格，填1-9都不行，回溯，恢复为空白格
//     }
//     return false; // 尝试了1-9，每个都往下递归，都不能做完，返回false
//   };
//
//   fill(0, 0); // 从第一个格子开始填
//   return board;
// };

var solveSudoku = function (board) {
  const hasConflit = (r, c, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][c] == val || board[r][i] == val) {
        return true
      }
    }
    let startCow = Math.floor(c / 3) * 3, startRow = Math.floor(r / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCow + j] == val) {return true}
      }
    }
    return false
  }
  const fill = (i, j) => {
    if (j == 9) {
      i++
      j = 0
      if (i == 9) return true
    }
    if (board[i][j] != '.') return fill(i, j + 1)
    for (let v = 1; v <= 9; v++) {
      if (hasConflit(i, j, v)) {continue}
      board[i][j] = `${v}`
      if (fill(i, j + 1)) return true
      board[i][j] = '.'
    }
    return false
  }
  fill(0, 0)
  return board
}
//leetcode submit region end(Prohibit modification and deletion)

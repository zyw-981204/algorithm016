//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。 
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。 
//
// 此外，你可以假设该网格的四条边均被水包围。 
//
// 
//
// 示例 1: 
//
// 输入:
//[
//['1','1','1','1','0'],
//['1','1','0','1','0'],
//['1','1','0','0','0'],
//['0','0','0','0','0']
//]
//输出: 1
// 
//
// 示例 2: 
//
// 输入:
//[
//['1','1','0','0','0'],
//['1','1','0','0','0'],
//['0','0','1','0','0'],
//['0','0','0','1','1']
//]
//输出: 3
//解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
// 
// Related Topics 深度优先搜索 广度优先搜索 并查集 
// 👍 773 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  if (!grid.length) {
    return 0
  }
  let num = 0
  let row = grid.length
  let col = grid[0].length
  const dfs = (x, y) => {
    if (grid[x][y] == 1) {
      grid[x][y] = 0
      x > 0 && dfs(x - 1, y)
      x < row - 1 && dfs(x + 1, y)
      y > 0 && dfs(x, y - 1)
      y < col - 1 && dfs(x, y + 1)
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        num++
        dfs(i, j)
      }
    }
  }
  return num
}

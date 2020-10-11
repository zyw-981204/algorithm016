const numIslands = (grid) => {
  if (!grid.length) return 0
  let count = 0
  const col = grid.length, row = grid[0].length
  const dfs = (grid, x, y) => {
    if (grid[x][y] === '1') {
      grid[x][y] = '0'
      x > 0 && dfs(grid, x - 1, y)
      y > 0 && dfs(grid, x, y - 1)
      x < col - 1 && dfs(grid, x + 1, y)
      y < row - 1 && dfs(grid, x, y + 1)
    }
  }
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(grid, i, j)
      }
    }
  }
  return count
}
const updateBoard = (board, click) => {
  const m = board.length
  const n = board[0].length
  // const dx = [-1, 0, 1, -1, 1, -1, 0, 1]
  // const dy = [-1, -1, -1, 0, 0, 1, 1, 1]
  const dir = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]
  const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n
  const bfs = (x, y) => {
    const queue = [[x, y]]
    while (queue.length) {
      const [x, y] = queue.shift()
      let count = 0
      count = dir.reduce((sum, [nx, ny]) => sum + !!(inBound(nx, ny) && board[nx][ny] === 'M'))
      // 统计周围的雷的数量
      // for (let i = 0; i < 8; i++) {
      //   const nX = x + dx[i]
      //   const nY = y + dy[i]
      //   if (inBound(nX, nY) && board[nX][nY] === 'M') count++
      // }
      if (!count) {
        board[x][y] = 'B'
        for (let i = 0; i < 8; i++) {
          const nX = x + dx[i]
          const nY = y + dy[i]
          // 如果没有越界,并且当前元素的值为E,并且需要标记成已经访问过的,并且继续遍历他周围的点
          if (inBound(nX, nY) && board[nX][nY] === 'E') {
            board[nX][nY] = 'B' // 变成一个非E字符就行，标记该节点被访问过
            queue.push([nX, nY])
          }
        }
      } else board[x][y] = String(count)
    }
  }

  const [cX, cY] = click
  if (board[cX][cY] === 'M') board[cX][cY] = 'X' else bfs(cX, cY)
  return board
}
/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * @name getHint
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 方法一：两次遍历 + map + deque
// 时间超过 54 空间超过 20
const getHint = (secret, guess) => {
  let map = {},
    bulls = 0,
    cows = 0,
    deque = []
  // map 用来记录 secret中数字出现的次数 ，deque 用来记录bulls的位置
  for (let k = 0; k < secret.length; k++) {
    // 计算bulls
    if (secret[k] === guess[k]) {
      bulls++
      deque.push(k)
    } else secret[k] in map ? map[secret[k]]++ : map[secret[k]] = 1
    // 计算cows
  }
  for (let i = 0; i < guess.length; i++) {
    // 遇到bulls的位置跳过，并且更新位置
    if (i === deque[0]) {
      deque.shift()
      continue
    }
    // 如果在secret中出现过 且次数小于在secret出现的次数则cows++
    if (guess[i] in map && map[guess[i]] > 0) {
      map[guess[i]]--
      cows++
    }
  }
  return (bulls + 'A' + cows + 'B')
}
// 方法二: 一次遍历 + 用数组来记录对应出现的次数
// 时间超过 93 空间超过 45
const getHint = (secret, guess) => {
  // 使用长度为10的数组做map
  let map = Array(10).fill(0),
    bulls = 0,
    cows = 0
  for (let i = 0; i < secret.length; i++) {
    // 先判断是否是公牛
    if (secret[i] === guess[anghi]) bulls++
    // 每次进行判断看secret
    else {
      // map中index对应的值表示对应数字出现的次数 初始状态为0
      // 如果在secret中出现则+1 如果在guess中出现则 -1
      // 如果在secret出现过则为正数 在guess中出现过则为负数
      if (map[secret[i]]++ < 0) { cows++ }
      if (map[guess[i]]-- > 0) { cows++ }
    }
  }
  return `${bulls}A${cows}B`
}
// @lc code=end
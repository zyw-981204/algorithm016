/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @name isAnagram
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 使用数组做hashmap
const isAnagram = (s, t) => {
  // 如果长度不相等则错误
  if (s.length !== t.length) return false
  // 使用(Unicode -97) 来作为index值来统计各个字母出现的次数
  let map = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    // 在s中出现++ t中出现-- 如果次数出现一样则最后为0
    let curSVal = s[i].charCodeAt() - 97,
      carTVal = t[i].charCodeAt() - 97
    map[curSVal]++, map[carTVal]--
  }
  // 最后遍历 map中是否有非0数
  return map.every(val => val === 0)
}

// 使用对象做hashmap
const isAnagram = (s, t) => {
  const map = {}
  s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1)
  t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1)
  return Object.keys(map).every(k => map[k] === 0)
}

// @lc code=end
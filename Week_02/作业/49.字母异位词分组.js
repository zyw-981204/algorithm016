/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 * @name calHash
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 法一暴力 自定义了一个hash函数 计算出没个数的hash值
// 再用hash值来做 key值，存hashmap 
// 空间击败30%  时间击败30% 
const calHash = (str) => {
  let hash = Array(26).fill(0)
  str.split('').forEach((v) => {
    hash[v.charCodeAt() - 97]++
  })
  return hash.join(',')
}
const groupAnagrams = (strs) => {
  let res, map = {}
  for (let n of strs) {
    let hash = calHash(n)
    if (hash in map) map[hash].push(n)
    else map[hash] = [n]
  }
  res = Object.values(map)
  return res
}
// 法二
// 对每个str打乱重排作为key值
// 再存hash表
// 时间击败50 % 空间击败36 %
const groupAnagrams = (strs) => {
  let map = {}
  for (let n of strs) {
    let hash = n.split('').sort().join()
    if (hash in map) map[hash].push(n)
    else map[hash] = [n]
  }
  return Object.values(map)
}
// @lc code=end
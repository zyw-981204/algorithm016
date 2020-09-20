/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @name intersect
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

// 解法一 已排序双指针 时间超越 42% 空间超越1%
const intersect = (nums1, nums2) => {
  nums2.sort((a, b) => a - b)
  nums1.sort((a, b) => a - b)
  // 假设已排序 用双指针
  let p1 = 0,
    p2 = 0,
    res = []
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) { res.push(nums1[p1]), p1++, p2++ } else if (nums1[p1] > nums2[p2]) p2++
    else p1++
  }
  return res
}
// 解法二 hashMap 时间超越 40% 空间超越11.51%
const intersect = (nums1, nums2) => {
  let map = {},
    res = []
  for (const n of nums1) {
    if (map[n]) map[n]++
    else map[n] = 1
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
// @lc code=end
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @name intersection
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

//方法一 使用api includes 和Set去重 时间复杂度O(n * k) 空间复杂度 O(k)
// 时间超过 60% 空间超过 40%
var intersection = function (nums1, nums2) {
  return Array.from(new Set(nums1.filter(val => nums2.includes(val))))
}
// @lc code=end
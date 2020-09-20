/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @name maxArea
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const maxArea = (height) => {
  let l = 0,
    r = height.length - 1,
    maxArea = 0
  while (l < r) {
    let temp = (r - l) * Math.min(height[l], height[r])
    maxArea = temp > maxArea ? temp : maxArea
    height[l] > height[r] ? r-- : l++
  }
  return maxArea
}
// @lc code=end
// @after-stub-for-debug-begin
module.exports = maxArea
// @after-stub-for-debug-end
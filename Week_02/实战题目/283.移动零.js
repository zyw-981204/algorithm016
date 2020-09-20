/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let i = 0,
    j = 0
  for (; i < nums.length; i++) {
    let curVal = nums[i]
    if (curVal) [nums[j++], nums[i]] = [nums[i], nums[j]]
  }
}
// @lc code=end
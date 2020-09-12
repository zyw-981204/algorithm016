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
var moveZeroes = function(nums) {
    let i = 0,
        j = 0
    while (i < nums.length) {
        if (nums[i]) {
            [nums[i], nums[j++]] = [nums[j], nums[i]]
        }
        i++
    }
};
// @lc code=end
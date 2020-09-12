/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length || nums.length === 1) { return 1 }
    let left = 0,
        i = 0
    for (; i < nums.length; i++) {
        if (nums[i] !== nums[left]) {
            nums[++left] = nums[i]
        }
    }
    return left + 1
};
// @lc code=end
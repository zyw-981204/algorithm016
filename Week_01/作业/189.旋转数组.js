/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (arr, l, r) => {
    while (l < r) {
        // 注意点双指针时，右指针必须是--不然会死循环
        [arr[l++], arr[r--]] = [arr[r], arr[l]]
    }
}
var rotate = function(nums, k) {
    k = k % nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};
// @lc code=end
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(num1, m, num2, n) {
    let p1 = 0,
        p2 = 0,
        len = m + n,
        num1_copy = num1.slice()
    for (let i = 0; i < len; i++) {
        if (p1 < m && p2 < n) {
            num1[i] = num1_copy[p1] <= num2[p2] ? num1_copy[p1++] : num2[p2++]
        } else p1 < m ? num1[i] = num1_copy[p1++] : num1[i] = num2[p2++]
            // 上方的else 为对下方代码的简化
            //  else if (p1 < m) {
            //   num1[i] = num1_copy[p1++]
            // } else if (p2 < n) {
            //   num1[i] = num2[p2++]
            // }
    }
};
// @lc code=end
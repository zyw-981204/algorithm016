/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 法1 hashMap
var twoSum = function(nums, target) {
        const hashMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (hashMap.has(nums[i])) return [i, hashMap.get(nums[i])]
            else hashMap.set((target - nums[i]), i)
        }
        return []
    }
    // @lc code=end
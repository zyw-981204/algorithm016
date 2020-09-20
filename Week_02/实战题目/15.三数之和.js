/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @name threeSum
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const threeSum = (nums) => {
  let len = nums.length,
    res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (i != 0 && nums[i] === nums[i - 1]) continue
    let [left, right] = [i + 1, len - 1]
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        res.push([nums[left], nums[right], nums[i]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        right--, left++
      } else sum > 0 ? right-- : left++
    }
  }
  return res
}
// @lc code=end
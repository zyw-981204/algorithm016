/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * @name plusOne
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const plusOne = (digits) => {
  let len = digits.length - 1
  digits[len] += 1
  for (let i = len; i >= 0; i--) {
    if (i === 0 && digits[0] > 9) {
      digits[i] %= 10
      digits.unshift(1)
      continue
    }
    if (digits[i] > 9) {
      digits[i] %= 10
      digits[i - 1] += 1
    }
  }
  return digits
}

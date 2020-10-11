/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0
  // max为下次起跳最远可以跳到跃点
  let max = 0
  // end为本次跳跃范围的最远点
  let end = 0
  // 跳跃由两个过程，分为起跳和落地，起跳后必须有落地
  // 所以最后一个点 nums.length - 1 不能起跳，不能选进去
  for (let i = 0; i < nums.length - 1; i++) {
    // 在未落地之前不断更新下次跳跃的最远点
    max = Math.max(max, nums[i] + i)
    // 到达本次跳跃边界，落地，进行边界更新，并再次起跳
    if (i === end) {
      end = max
      count++
    }
  }
  return count
}
//给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。 
//
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。 
//
// 
//
// 示例 1: 
//
// 输入: [3,2,3]
//输出: 3 
//
// 示例 2: 
//
// 输入: [2,2,1,1,1,2,2]
//输出: 2
// 
// Related Topics 位运算 数组 分治算法 
// 👍 748 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  // 计算ele在对应的区间出现的次数
  const count = (left, right, nums, ele) => {
    let count = 0
    for (let i = left; i <= right; i++) if (nums[i] === ele) count++
    return count
  }
  // 找出对应区间的出现的众数
  const dfs = (nums, left, right) => {
    // recursion terminator
    if (left === right) return nums[left]
    // process current problem
    // 把当前区域分为两部分，并且进行分治
    let mid = Math.floor((right - left) / 2) + left
    // 找出各个区域的众数
    let numsLeft = dfs(nums, left, mid)
    let numsRight = dfs(nums, mid + 1, right)
    // merge
    // 根据左右区间的众数出现的次数，作为当前区域的众数
    let res = count(left, mid, nums, numsLeft) > count(mid + 1, right, nums, numsRight) ? numsLeft : numsRight
    // return
    return res
  }
  return dfs(nums, 0, nums.length - 1)
}
//leetcode submit region end(Prohibit modification and deletion)

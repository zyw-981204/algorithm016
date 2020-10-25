/**
 * 1. 分治,max_pro[i] = max(max_pro[i - 1] * nums[i], min_pro[i -1] * nums[i], nums[i])
 * 2. 定义状态数组
 *  a. min[i],max[i]表示到当前位置为止包括乘上自己的最小值,最大值
 *  b. DP方程
 *    max[i] = Math.max(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
 *    min[i] = Math.min(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
 */
var maxProduct = function (nums) {
  const max = nums.slice(), min = nums.slice();
  let res = nums[0];
  // 需要保存两个数，一个最大的数和一个最小的数，当数为负数时，直接让最大值最小值反向
  for (let i = 1; i < nums.length; i++) {
    max[i] = Math.max(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
    min[i] = Math.min(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
    res = Math.max(res, max[i])
  }
  return res
};
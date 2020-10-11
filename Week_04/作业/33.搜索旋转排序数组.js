//假设按照升序排序的数组在预先未知的某个点上进行了旋转。 
//
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。 
//
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。 
//
// 你可以假设数组中不存在重复的元素。 
//
// 你的算法时间复杂度必须是 O(log n) 级别。 
//
// 示例 1: 
//
// 输入: nums = [4,5,6,7,0,1,2], target = 0
//输出: 4
// 
//
// 示例 2: 
//
// 输入: nums = [4,5,6,7,0,1,2], target = 3
//输出: -1 
// Related Topics 数组 二分查找 
// 👍 1002 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return mid
    // nums[mid] >= nums[0] 判断mid的值是在左边一段还是右边一段
    const inLeft = nums[mid] >= nums[0]
    if (nums[mid] >= nums[0]) (target >= nums[0] && target < nums[mid]) ? (r = mid - 1) : (l = mid + 1)
    else (nums[mid] < target && target <= nums[nums.length - 1]) ? (l = mid + 1) : (r = mid - 1)
  }
  return -1
}
//leetcode submit region end(Prohibit modification and deletion)

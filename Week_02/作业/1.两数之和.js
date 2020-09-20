//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。 
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。 
//
// 
//
// 示例: 
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
// 
// Related Topics 数组 哈希表 
// 👍 9160 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @name twoSum
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */
// Time complexity: O(N) Space complexity: O(N)
// hashMap
const twoSum = (nums, target) => {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) return [i, hashMap.get(nums[i])]
    else hashMap.set((target - nums[i]), i)
  }
  return []
}

//给定一个非负整数数组，你最初位于数组的第一个位置。 
//
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。 
//
// 判断你是否能够到达最后一个位置。 
//
// 示例 1: 
//
// 输入: [2,3,1,1,4]
//输出: true
//解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
// 
//
// 示例 2: 
//
// 输入: [3,2,1,0,4]
//输出: false
//解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
// 
// Related Topics 贪心算法 数组 
// 👍 852 👎 0

// 1. DFS
const memo = new Map();
var canJump = function (nums) {
  // DFS + 缓存 超时
  const dfs = (index) => {
    // terminator
    if (index >= nums.length - 1) return true
    // process the current logic
    for (let i = 1; i <= nums[index]; i++) {
      let flag
      if (memo.has(i + index)) {
        flag = memo.get(i + index)
      } else {
        flag = dfs(i + index)
        memo.set(i + index, flag)
      }
      if (flag) return true
    }
    return false
  }
  return dfs(0)
}

// 2. 贪心 自前向后贪心
var canJump = function (nums) {
  let canArv = 0
  for (let i = 0; i < nums.length; i++) {
    // 如果跳到最远可以到达的地方则错误
    if (i > canArv) return false
    // 更新最远可以到达的地方
    canArv = Math.max(canArv, i + nums[i])
    // 终止条件
    if (canArv >= nums.length - 1) return true
  }
}
// 3. 贪心 自后向前
var canJump = function (nums) {
  let canArv = nums.length - 1
  // 判断前一个位置能否跳到后一个位置,不断更新可以调到最后一个位置的地方
  for (let i = nums.length - 2; i >= 0; i--) {
    // 如果可以跳到则更新可以到达最后一个位置的地方
    if (i + nums[i] >= canArv) canArv = i
  }
  // 判断最远可以跳到最后一个位置的地方是不是开头
  return canArv === 0
}
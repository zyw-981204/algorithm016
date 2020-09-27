//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。 
//
// 
//
// 示例： 
//
// 输入：n = 3
//输出：[
//       "((()))",
//       "(()())",
//       "(())()",
//       "()(())",
//       "()()()"
//     ]
// 
// Related Topics 字符串 回溯算法 
// 👍 1324 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  let res = []
  const generate = (l, r, s) => {
    if (l === n && r === n) res.push(s)
    if (l < n) generate(l + 1, r, s + '(')
    if (r < l) generate(l, r + 1, s + ')')
  }
  generate(0, 0, '')
  return res
}
//leetcode submit region end(Prohibit modification and deletion)

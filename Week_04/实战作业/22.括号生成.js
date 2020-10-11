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
// 👍 1358 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return []
  const res = []
  if (l < n) {
    path += '('
    generate(l + 1, r, path)
    path = path.slice(0, path.length - 1)
  }
  if (r < l) {
    path += ')'
    generate(l, r + 1, path)
    path = path.slice(0, path.length - 1)
  }
}
generate(0, 0, '')
return res
}
//leetcode submit region end(Prohibit modification and deletion)

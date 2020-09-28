//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。 
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。 
//
// 
//
// 示例: 
//
// 输入："23"
//输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 
//
// 说明: 
//尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。 
// Related Topics 字符串 回溯算法 
// 👍 935 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'], res = [];
  const dfs = (path, level) => {
    if (level === digits.length) {
      res.push(path.slice())
      return;
    }
    for (let n of map[digits[level] - 0]) {
      path += n;
      dfs(path, level + 1);
      path = path.slice(0, path.length - 1)
    }
  }
  dfs('',0)
  return res
};


//一条基因序列由一个带有8个字符的字符串表示，其中每个字符都属于 "A", "C", "G", "T"中的任意一个。 
//
// 假设我们要调查一个基因序列的变化。一次基因变化意味着这个基因序列中的一个字符发生了变化。 
//
// 例如，基因序列由"AACCGGTT" 变化至 "AACCGGTA" 即发生了一次基因变化。 
//
// 与此同时，每一次基因变化的结果，都需要是一个合法的基因串，即该结果属于一个基因库。 
//
// 现在给定3个参数 — start, end, bank，分别代表起始基因序列，目标基因序列及基因库，请找出能够使起始基因序列变化为目标基因序列所需的最少变
//化次数。如果无法实现目标变化，请返回 -1。 
//
// 注意: 
//
// 
// 起始基因序列默认是合法的，但是它并不一定会出现在基因库中。 
// 所有的目标基因序列必须是合法的。 
// 假定起始基因序列与目标基因序列是不一样的。 
// 
//
// 示例 1: 
//
// 
//start: "AACCGGTT"
//end:   "AACCGGTA"
//bank: ["AACCGGTA"]
//
//返回值: 1
// 
//
// 示例 2: 
//
// 
//start: "AACCGGTT"
//end:   "AAACGGTA"
//bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
//
//返回值: 2
// 
//
// 示例 3: 
//
// 
//start: "AAAAACCC"
//end:   "AACCCCCC"
//bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
//
//返回值: 3
// 
// 👍 51 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const bankSet = new Set()
  for (let i = 0; i < bank.length; i++) {
    bankSet.add(bank[i])
  }
  // 声明一个队列用于广度优先探索
  // geners中的元素为广度优先在本层中需要改变的元素
  let q = [[start, 0]], geners = ['A', 'C', 'G', 'T'];
  while (q.length) {
    let [node, count] = q.shift()
    // recursion terminator
    if (node === end) return count
    // 对在基因库出现过的string进行基因突变,与geners中的基本量进行拼接生成新的基因
    for (let i = 0; i < node.length; i++) {
      for (let n of geners) {
        // 看是否出现在bankSet库中,如果出现过则在bankset中,则继续突变
        let temp = node.slice(0, i) + n + node.slice(i + 1)
        if (bankSet.has(temp)) {
          // 剪枝把在bank中的已经出现过的基因删除,防止重复突变
          bankSet.delete(temp)
          q.push([temp, count + 1])
        }
      }
    }
  }
  return -1
}
//leetcode submit region end(Prohibit modification and deletion)

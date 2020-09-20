//写一个程序，输出从 1 到 n 数字的字符串表示。 
//
// 1. 如果 n 是3的倍数，输出“Fizz”； 
//
// 2. 如果 n 是5的倍数，输出“Buzz”； 
//
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。 
//
// 示例： 
//
// n = 15,
//
//返回:
//[
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
//]
// 
// 👍 72 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 * @name fizzBuzz
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

const fizzBuzz = (n) => {
  let res = []
  for (let s = 1; s <= n; s++) {
    if (!(s % 15)) res.push('FizzBuzz')
    else if (!(s % 5)) res.push('Buzz')
    else if (!(s % 3)) res.push('Fizz')
    else res.push(`${s}`)
  }
  return res
}


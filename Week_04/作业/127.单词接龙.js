var ladderLength = function (beginWod, endWord, wordList) {
  let q1 = [beginWod], q2 = [endWord], set1 = new Map(), set2 = new Map();
  set1.set(beginWod), set2.set(endWord);
  let count = 0;
  let map = new Map();
  for (let n of wordList) map.set(n);
  if (!map.has(endWord)) return 0;
  while (q1.length && q2.length) {
    if (q1.length > q2.length) {
      [q1, q2] = [q2, q1];
      [set2, set1] = [set1, set2];
    }
    count++;
    let node = [];
    for (let word of q1) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          let temp = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(1 + i);
          if (set1.has(temp)) continue;
          if (set2.has(temp)) return count + 1;
          if (map.has(temp)) {
            node.push(temp);
            set1.set(temp)
          }
        }
      }
    }
    q1 = node;
  }
  return 0
};
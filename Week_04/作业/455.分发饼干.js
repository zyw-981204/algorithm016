var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    // 使用刚好可以满足小孩胃口的饼干来满足小孩，如果小孩胃口大于饼干的量，则后移
    if (s[i] >= g[total]) total++;
  }
  return total
};
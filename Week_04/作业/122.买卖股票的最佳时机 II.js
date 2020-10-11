var maxProfit = function  (prices) {
  let money = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) money += prices[i + 1] - prices[i]
  }
  return money
};
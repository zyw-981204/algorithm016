var lemonadeChange = function (bills) {
  let five = 0, ten = 0;
  for (let bill of bills) {
    if (bill === 5) five++;
    if (bill === 10) { five-- , ten++ }
    if (bill === 20) { ten ? (ten-- , five--) : five -= 3 }
    if (five < 0) return false;
  }
  return true;
};
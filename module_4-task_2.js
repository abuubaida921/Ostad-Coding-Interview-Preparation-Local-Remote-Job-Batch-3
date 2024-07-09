///Main Function

function maxProfit(prices) {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  
  return maxProfit;
}

///Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 6, 4, 3, 101]));
console.log(maxProfit([1, 2, 10, 9, 4, 3, 20, 1]));


/// Time Complexity: O(n)
/// Also Space Complexity: O(1)

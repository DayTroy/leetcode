class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minSell = prices[0];

        for (let i = 1; i < prices.length; i++) {
            minSell = Math.min(minSell, prices[i]);
            profit = Math.max(profit, prices[i] - minSell);
        }

        return profit;
    }
}

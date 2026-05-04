class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxSell = 0;

        for (let i = 0; i < prices.length; i++) {
            minBuy = Math.min(minBuy, prices[i]);
            maxSell = Math.max(maxSell, prices[i] - minBuy);
        }

        return maxSell
    }
}

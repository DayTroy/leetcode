class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0, r = 1;

        while (r < prices.length) {
            profit = Math.max(profit, prices[r] - prices[l]);
            if (prices[l] >= prices[r]) {
                l++;
                r = l + 1;
            } else {
                r++;
            }
        }

        return profit;
    }
}

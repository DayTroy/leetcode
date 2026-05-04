class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = l + 1, max = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            }
            max = Math.max(max, prices[r] - prices[l]);
            r++;
        }

        return max
    }
}

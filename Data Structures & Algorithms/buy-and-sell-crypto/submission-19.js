class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // [10,1,5,6,7,1]
    // [5,1,5,6,7,1,10]
    //  l,r
    /// 
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0, r = l + 1;

        while (r < prices.length) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);

            if (prices[l] <= prices[r]) {
                r++;
            } else {
                l++;
            }
        }

        return maxProfit;
    }
}

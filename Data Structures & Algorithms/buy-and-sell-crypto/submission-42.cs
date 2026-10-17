public class Solution {
    public int MaxProfit(int[] prices) {
        int maxProfit = 0;
        int l = 0, r = 1;
        while (r < prices.Length) {
            maxProfit = Math.Max(maxProfit, prices[r] - prices[l]);

            if (prices[r] < prices[l]) {
                l++;
                continue;
            }

            r++;
        }

        return maxProfit;
    }
}

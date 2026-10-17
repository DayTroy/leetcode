public class Solution {
    public int MaxProfit(int[] prices) {
        int maxProfit = 0;
        int minBuy = prices[0];
        for (int i = 1; i < prices.Length; i++) {
            minBuy = Math.Min(minBuy, prices[i]);
            maxProfit = Math.Max(maxProfit, prices[i] - minBuy);
        }
        return maxProfit;
    }
}

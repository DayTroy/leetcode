public class Solution {
    public int MaxProfit(int[] prices) {
        int result = 0;
        for (int i = 0; i < prices.Length; i++) {
            for (int j = i + 1; j < prices.Length; j++) {
                result = Math.Max(result, prices[j] - prices[i]);
            }
        }
        return result;
    }
}

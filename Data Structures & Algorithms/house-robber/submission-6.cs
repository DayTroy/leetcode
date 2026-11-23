public class Solution {
    public int Rob(int[] nums) {        
        int n = nums.Length;
        if (n == 1) return nums[0];

        int[] dp = new int[n];
        dp[0] = nums[0];
        dp[1] = Math.Max(dp[0], nums[1]);

        for (int i = 2; i < n; i++) {
            int robCurrent = nums[i] + dp[i - 2];
            int skipCurr = dp[i - 1];

            dp[i] = Math.Max(robCurrent, skipCurr);
        }

        return dp[n - 1];
    }
}

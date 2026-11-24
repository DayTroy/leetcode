public class Solution {
    public int Rob(int[] nums) {
        if (nums.Length == 1) return nums[0];
        int[] dp = new int[nums.Length];

        dp[0] = nums[0];
        dp[1] = Math.Max(dp[0], nums[1]);

        for (int i = 2; i < nums.Length; i++) {
            int rob = dp[i - 2] + nums[i];
            int skip = dp[i - 1];
            dp[i] = Math.Max(rob, skip);
        }

        return dp[nums.Length - 1];
    }
}

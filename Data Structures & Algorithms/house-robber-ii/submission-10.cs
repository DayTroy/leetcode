public class Solution {
    public int Rob(int[] nums) {
        if (nums.Length == 0) return 0;
        if (nums.Length == 1) return nums[0];

        int res1 = DP(nums[0..(nums.Length - 1)]);
        int res2 = DP(nums[1..nums.Length]);

        return Math.Max(res1, res2);
    }

    public int DP(int[] nums) {
        int n = nums.Length;

        if (n == 0) return 0;
        if (n == 1) return nums[0];

        int[] dp = new int[n];
        dp[0] = nums[0];
        dp[1] = Math.Max(dp[0], nums[1]);

        for (int i = 2; i < n; i++) {
            int rob = nums[i] + dp[i - 2];
            int skip = dp[i - 1];
            dp[i] = Math.Max(rob, skip);
        }

        return dp[n - 1];
    }
}

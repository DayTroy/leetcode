public class Solution {
    public int Rob(int[] nums) {
        int n = nums.Length;
        if (n == 1) return nums[0];
        int res1 = DP(nums[0..(n - 1)], 0, new Dictionary<int, int>());
        int res2 = DP(nums[1..n], 0, new Dictionary<int, int>());
        return Math.Max(res1, res2);
    }

    public int DP(int[] nums, int i, Dictionary<int, int> memo) {
        if (i >= nums.Length) return 0;
        
        if (memo.ContainsKey(i)) return memo[i];

        int rob = nums[i] + DP(nums, i + 2, memo);
        int skp = DP(nums, i + 1, memo);

        int result = Math.Max(rob, skp);
        memo[i] = result;
        return result;
    }
}

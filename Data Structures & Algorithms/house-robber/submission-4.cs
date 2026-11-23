public class Solution {
    public int Rob(int[] nums) {
        Dictionary<int, int> memo = new();
        return DP(nums, 0, memo);
    }

    public int DP(int[] nums, int i, Dictionary<int, int> memo) {
        if (i >= nums.Length) return 0;

        if (memo.ContainsKey(i)) return memo[i];

        int robCurrent = nums[i] + DP(nums, i + 2, memo);
        int skipCurrent = DP(nums, i + 1, memo);   
        int result = Math.Max(robCurrent, skipCurrent);
        memo[i] = result;
        return result;
    }
}

public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        Dictionary<int, int> memo = new();
        return Math.Min(DP(cost, 0, memo), DP(cost, 1, memo));
    }

    public int DP(int[] cost, int i, Dictionary<int, int> memo) {
        if (i >= cost.Length) return 0;

        if (memo.ContainsKey(i)) return memo[i];
        int result = cost[i] + Math.Min(DP(cost, i + 1, memo), DP(cost, i + 2, memo));
        memo[i] = result;

        return result;
    }
}

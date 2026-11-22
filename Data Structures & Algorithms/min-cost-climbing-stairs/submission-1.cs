public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        Dictionary<int, int> memo = new();
        return Math.Min(DP(cost, 0, memo), DP(cost, 1, memo));
    }

    public int DP(int[] cost, int index, Dictionary<int, int> memo) {
        if (index >= cost.Length) return 0;

        if (memo.ContainsKey(index)) {
            return memo[index];
        }
        int result = cost[index] + Math.Min(DP(cost, index + 1, memo), DP(cost, index + 2, memo));
        memo[index] = result;

        return result;
    }
}

public class Solution {
    private readonly Dictionary<int, int>memo = new();
    public int ClimbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;

        if (memo.ContainsKey(n)) {
            return memo[n];
        }
        int result = ClimbStairs(n - 1) + ClimbStairs(n - 2);
        memo[n] = result;
        return result;
    }
}

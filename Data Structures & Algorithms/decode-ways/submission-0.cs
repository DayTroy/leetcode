public class Solution {
    public int NumDecodings(string s) {
        Dictionary<int, int> memo = new();
        return DP(s, 0, memo);
    }

    public int DP(string s, int i,  Dictionary<int, int> memo) {
        if (i == s.Length) return 1;
        if (s[i] == '0') return 0;

        if (memo.ContainsKey(i)) return memo[i];

        int ways = DP(s, i + 1, memo);
        if (i + 1 < s.Length) {
            int twoDigits = int.Parse(s.Substring(i, 2));
            if (twoDigits >= 10 && twoDigits <= 26) {
                ways += DP(s, i + 2, memo);
            }
        }
        memo[i] = ways;
        return ways;
    }
}

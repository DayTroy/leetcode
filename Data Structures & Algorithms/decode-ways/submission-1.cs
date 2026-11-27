public class Solution {
    public int NumDecodings(string s) {
        Dictionary<int, int> memo = new();
        return Solve(s, 0, memo);
    }

    public int Solve(string s, int i, Dictionary<int, int> memo) {
        if (memo.ContainsKey(i)) return memo[i];
        if (i >= s.Length) return 1;
        if (s[i] == '0') return 0;

        int ways = Solve(s, i + 1, memo);
        if (i + 1 < s.Length) {
            int twoDigits = int.Parse(s.Substring(i, 2));
            if (twoDigits >= 10 && twoDigits <= 26) {
                ways += Solve(s, i + 2, memo);
            }
        }
        memo[i] = ways;
        return ways;
    }
}

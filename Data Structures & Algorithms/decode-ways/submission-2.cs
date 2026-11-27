public class Solution {
    public int NumDecodings(string s) {
        int n = s.Length;
        int[] dp = new int[n + 1];
        dp[n] = 1;

        for (int i = n - 1; i >= 0; i--) {
            if (s[i] == '0') {
                dp[i] = 0;
                continue;
            }
            
            dp[i] = dp[i + 1];
            if (i + 1 < n && int.Parse(s.Substring(i, 2)) <= 26) {
                dp[i] += dp[i + 2];
            }
        }

        return dp[0];
    }
}

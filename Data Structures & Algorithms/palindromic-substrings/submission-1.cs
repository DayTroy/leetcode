public class Solution {
    public int CountSubstrings(string s) {
        int count = 0;
        int n = s.Length;
        bool[,] dp = new bool[n, n];

        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[j] == s[i] && (j - i <= 2 || dp[i + 1, j - 1] == true)) {
                    dp[i, j] = true;
                    count++;
                }
            }
        }

        return count;
    }
}

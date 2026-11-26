public class Solution {
    public string LongestPalindrome(string s) {
        int n = s.Length;
        string res = "";
        bool[,] dp = new bool[n, n];

        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[i] == s[j] &&(j - i <= 2 || dp[i + 1, j - 1] == true))
                {
                    dp[i, j] = true;
                    if (j - i + 1 > res.Length) {
                        res = s[i..(j + 1)];
                    }
                }
            }
        }

        return res;
    }
}

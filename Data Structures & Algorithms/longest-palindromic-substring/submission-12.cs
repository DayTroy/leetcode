public class Solution {
    public string LongestPalindrome(string s) {
        int n = s.Length;
        int start = 0;
        int maxLen = 0;

        for (int i = 0; i < n; i++) {
            Solve(s, i, i, ref start, ref maxLen);
            Solve(s, i, i + 1, ref start, ref maxLen);
        }

        return s.Substring(start, maxLen);
    }

    public void Solve(string s, int left, int right, ref int start, ref int maxLen) {
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            int currLen = right - left + 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                start = left;
            }

            left--;
            right++;
        }
    }
}

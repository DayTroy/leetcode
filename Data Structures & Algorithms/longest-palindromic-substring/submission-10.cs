public class Solution {
    public string LongestPalindrome(string s) {
         if (string.IsNullOrEmpty(s)) return "";
    
        int start = 0;
        int maxLen = 0;

        for (int i = 0; i < s.Length; i++) {
            DP(s, i, i, ref start, ref maxLen);
            DP(s, i, i + 1, ref start, ref maxLen);
        }

        return s.Substring(start, maxLen);
    }

    public void DP(string s, int left, int right, ref int start, ref int maxLen) {
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            int currentLen = right - left + 1;
            if (currentLen > maxLen) {
                maxLen = currentLen;
                start = left;
            }
            left--;
            right++;
        }
    }
}

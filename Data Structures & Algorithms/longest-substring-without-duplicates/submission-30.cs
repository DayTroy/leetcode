public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int longest = 0;
        int l = 0;
        HashSet<char> substr = new HashSet<char>();

        for (int r = 0; r < s.Length; r++) {
            while (substr.Contains(s[r])) {
                substr.Remove(s[l]);
                l++;
            }
            substr.Add(s[r]);
            longest = Math.Max(longest, substr.Count);
        }

        return longest;
    }
}

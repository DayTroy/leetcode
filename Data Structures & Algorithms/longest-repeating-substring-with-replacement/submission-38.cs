public class Solution {
    public int CharacterReplacement(string s, int k) {
        int longest = 0;
        var frequency = new Dictionary<char, int>();
        int maxF = 0;
        int l = 0;
        for (int r = 0; r < s.Length; r++) {
            if (frequency.ContainsKey(s[r])) {
                frequency[s[r]] = frequency[s[r]] + 1;
            } else {
                frequency.Add(s[r], 1);
            }
            maxF = Math.Max(maxF, frequency[s[r]]);

            while (r - l + 1 - maxF > k) {
                frequency[s[l]] = frequency[s[l]] - 1;
                l++;
            }

            longest = Math.Max(longest, r - l + 1);
        }

        return longest;
    }
}

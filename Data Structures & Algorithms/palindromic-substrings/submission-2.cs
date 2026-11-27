public class Solution {
    public int CountSubstrings(string s) {
        int n = s.Length;
        int count = 0;

        for (int i = 0; i < n; i++) {
            Solve(s, i, i, ref count);
            Solve(s, i, i + 1, ref count);
        }

        return count;
    }

    public void Solve(string s, int left, int right, ref int count) {
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
    }
}

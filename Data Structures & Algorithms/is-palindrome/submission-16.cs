public class Solution {
    public bool IsPalindrome(string s) {
        int l = 0, r = s.Length - 1;

        while (l < r) {
            char sl = char.ToLower(s[l]);
            char sr = char.ToLower(s[r]);
            if (!isAlphaNumeric(sl)) {
                l++;
                continue;
            }

            if (!isAlphaNumeric(sr)) {
                r--;
                continue;
            }

            if(sl != sr) return false;
            l++;
            r--;
        }

        return true;
    }

    public bool isAlphaNumeric(char ch) {
        if (ch >= 'a' && ch <= 'z' || 
        ch >= 'A' && ch <= 'Z' ||
        ch >= '0' && ch <= '9') return true;
        return false;
    }
}

public class Solution {
    public bool WordPattern(string pattern, string s) {
        Dictionary<char, string> forward = new();
        Dictionary<string, char> reverse = new();

        var arr = s.Split(' ');

        if (pattern.Length != arr.Length) return false;

        for (int i = 0; i < pattern.Length; i++) {
            if (!forward.ContainsKey(pattern[i])) {
                forward[pattern[i]] = arr[i]; 
            }

            if (!reverse.ContainsKey(arr[i])) {
                reverse[arr[i]] = pattern[i]; 
            }
        }

        for (int i = 0; i < arr.Length; i++) {
            if (arr[i] != forward[pattern[i]]) return false;
            if (pattern[i] != reverse[arr[i]]) return false;
        }

        return true;
    }
}
public class Solution {
    public string MinWindow(string s, string t) {
        var tDict = new Dictionary<char, int>();
        var resLen = int.MaxValue;
        int[] resIndices = { -1, -1 };

        foreach (char ch in t) {
            if (tDict.ContainsKey(ch)) {
                tDict[ch] = tDict[ch] + 1;
            } else {
                tDict.Add(ch, 1);
            }
        }

        int need = tDict.Count;
        var sDict = new Dictionary<char, int>();
        int have = 0;
        int l = 0;
        for (int r = 0; r < s.Length; r++) {
            if (sDict.ContainsKey(s[r])) {
                sDict[s[r]] = sDict[s[r]] + 1;
            } else {
                sDict.Add(s[r], 1);
            }

            if (tDict.ContainsKey(s[r]) && tDict[s[r]] == sDict[s[r]]) {
                have++;
            }

            while (have == need) {
                if (r - l + 1 <= resLen) {
                    resLen = r - l + 1;
                    resIndices[0] = l;
                    resIndices[1] = r;
                }

                sDict[s[l]] = sDict[s[l]] - 1;

                if (tDict.ContainsKey(s[l]) && tDict[s[l]] > sDict[s[l]]) {
                    have--;
                }

                l++;
            }
        }

        return resLen == int.MaxValue ? "" : s[resIndices[0]..(resIndices[1] + 1)];
    }
}

public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        var sMap = new Dictionary<char, int>();
        var tMap = new Dictionary<char, int>();

        foreach (var item in s) {
            sMap.TryGetValue(item, out int sCount);
            sMap[item] = sCount + 1;
        }

        foreach (var item in t) {
            tMap.TryGetValue(item, out int tCount);
            tMap[item] = tCount + 1;
        }

        foreach (var (key, value) in sMap) {
            tMap.TryGetValue(key, out int tValue);
            if (value != tValue) return false;
        }

        return true;
    }
}

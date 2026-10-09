public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var data = new Dictionary<string, List<string>>();

        foreach (string str in strs) {
            int[] count = new int[26];
            foreach (char ch in str) {
                count[ch - 'a'] += 1;
            }
            string key = string.Join('#', count);

            if (!data.ContainsKey(key)) {
                data.Add(key, new List<string>());
            }

            data[key].Add(str);
        }

        return data.Values.ToList();
    }
}

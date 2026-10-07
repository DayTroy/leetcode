public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var data = new Dictionary<string, List<string>>();

        foreach (string str in strs) {
            char[] charArray = str.ToCharArray();
            Array.Sort(charArray);
            string key = new string(charArray);

            if (data.ContainsKey(key)) {
                data[key].Add(str);
            } else {
                data[key] = new List<string>(){ str };
            }
        }

        return data.Values.ToList();
    }
}

public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var data = new Dictionary<string, List<string>>();

        foreach (string str in strs) {
            char[] charArr = str.ToCharArray();
            Array.Sort(charArr);
            string key = new string(charArr);
            
            if (!data.ContainsKey(key)) {
                data.Add(key, new List<string>());
            }

            data[key].Add(str);
        }

        return data.Values.ToList();
    }
}

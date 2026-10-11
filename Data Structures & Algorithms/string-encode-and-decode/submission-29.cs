public class Solution {
    public string Encode(IList<string> strs) {
        StringBuilder s = new StringBuilder();

        foreach (string str in strs) {
            s.Append(str.Length).Append('#').Append(str);
        }
        
        return s.ToString();
    }

    public List<string> Decode(string s) {
        var result = new List<string>();
        int i = 0;

        while (i < s.Length) {
            int j = i;
            while (s[j] != '#') {
                j++;
            }
            int size = int.Parse(s.Substring(i, j - i));
            i = j + 1;
            result.Add(s.Substring(i, size));
            i += size;
        }

        return result;
   }
}

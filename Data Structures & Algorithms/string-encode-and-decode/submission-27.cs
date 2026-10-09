public class Solution {

    public string Encode(IList<string> strs) {
        if (strs.Count == 0) return "";

        string s = "";

        foreach (string str in strs) {
            s += str.Length + "#" + str;
        }

        return s;
    }

    public List<string> Decode(string s) {
        if (s == "") return new List<string>();

        int i = 0, j = 0;
        var result = new List<string>();

        while (i < s.Length) {
            j = i;
            while (s[j] != '#') {
                j++;
            }

            int size = int.Parse(s.Substring(i, j - i));
            string item = s.Substring(j + 1, size);
            result.Add(item);
            i = j + size + 1;
        }

        return result;
   }
}

public class Solution {
    public string Encode(IList<string> strs) {
        StringBuilder str = new StringBuilder();

        foreach (string strItem in strs) {
            str.Append(strItem.Length).Append("#").Append(strItem);
        }

        return str.ToString();
    }

    public List<string> Decode(string s) {
        int i = 0;
        var result = new List<string>();
        while (i < s.Length) {
            int j = i;
            while (s[j] != '#') {
                j++;
            }
            int size = int.Parse(s.Substring(i, j - i));
            i = j + 1;
            string item = s.Substring(i, size);
            result.Add(item);
            i += size;
        }
        return result;
   }
}

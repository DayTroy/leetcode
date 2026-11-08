public class Solution { 
    List<string> result = new();
    public List<string> GenerateParenthesis(int n) {
        BackTrack(new List<string>(), n, n, n);
        return result;
    }

    public void BackTrack(List<string> path, int n, int open, int close) {
        if (2 * n == path.Count) {
            result.Add(string.Join("", path));
            return;
        }

        if (open > 0) {
            path.Add("(");
            BackTrack(path, n, open - 1, close);
            path.RemoveAt(path.Count - 1);
        } 
        
        if (close > open) {
            path.Add(")");
            BackTrack(path, n, open, close - 1);
            path.RemoveAt(path.Count - 1);
        }
    }
}

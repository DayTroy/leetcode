public class Solution {
    List<List<int>> result = new();

    public List<List<int>> CombinationSum2(int[] candidates, int target) {
        Array.Sort(candidates);
        BackTrack(candidates, target, new List<int>(), 0);
        return result;
    }

    public void BackTrack(int[] candidates, int remainTarget, List<int> path, int index) {
        if (remainTarget < 0) return;
        if (remainTarget == 0) {
            result.Add(new List<int>(path));
            return;
        }

        for (int i = index; i < candidates.Length; i++) {
            if (i > index && candidates[i] == candidates[i - 1]) continue;
            path.Add(candidates[i]);
            BackTrack(candidates, remainTarget - candidates[i], path, i + 1);
            path.RemoveAt(path.Count - 1);
        }
    }
}

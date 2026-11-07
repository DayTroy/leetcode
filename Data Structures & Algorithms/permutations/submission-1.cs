public class Solution {
    public List<List<int>> Permute(int[] nums) {
        List<List<int>> result = new();
        BackTrack(new List<int>(), nums, result);
        return result;
    }

    public void BackTrack(List<int> path, int[] nums, List<List<int>> result) {
        if (path.Count == nums.Length) {
            result.Add(new List<int>(path));
            return;
        }

        for (int i = 0; i < nums.Length; i++) {
            if (path.Contains(nums[i])) continue;
            path.Add(nums[i]);
            BackTrack(path, nums, result);
            path.Remove(nums[i]);
        }
    }
}

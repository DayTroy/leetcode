public class Solution {
    List<List<int>> result = new();
    public List<List<int>> Permute(int[] nums) {
        BackTrack(new List<int>(), nums, new bool[nums.Length]);
        return result;
    }

    public void BackTrack(List<int> path, int[] nums, bool[] pick) {
        if (path.Count == nums.Length) {
            result.Add(new List<int>(path));
            return;
        }

        for (int i = 0; i < nums.Length; i++) {
            if (!pick[i]) {
                path.Add(nums[i]);
                pick[i] = true;
                BackTrack(path, nums, pick);
                path.Remove(nums[i]);
                pick[i] = false;
            }
        }
    }
}

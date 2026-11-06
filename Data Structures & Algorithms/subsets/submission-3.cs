public class Solution {
    List<List<int>> result = new();
    public List<List<int>> Subsets(int[] nums) {
        List<int> path = new();
        BackTrack(nums, 0, path);
        return result;
    }


    public void BackTrack(int[] nums, int i, List<int> path) {
        if (i >= nums.Length) {
            result.Add(new List<int>(path));
            return;
        }

        path.Add(nums[i]);
        BackTrack(nums, i + 1, path);
        path.Remove(nums[i]);
        BackTrack(nums, i + 1, path);
    }
}

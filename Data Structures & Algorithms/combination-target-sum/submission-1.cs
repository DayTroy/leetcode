public class Solution {
    List<List<int>> result = new();
    public List<List<int>> CombinationSum(int[] nums, int target) {
        List<int> path = new();
        BackTrack(nums, target, path, 0);
        return result;
    }

    public void BackTrack(int[] nums, int target, List<int> path, int index) {
        if (path.Sum() == target) {
            result.Add(new List<int>(path));
            return;
        }

        if (path.Sum() > target) {
            return;
        }

        for (int i = index; i < nums.Length; i++) {
            path.Add(nums[i]);
            BackTrack(nums, target, path, i);
            path.Remove(nums[i]);
        }
    }
}

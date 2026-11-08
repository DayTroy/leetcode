public class Solution {
    List<List<int>> result = new();
    public List<List<int>> SubsetsWithDup(int[] nums) {
        Array.Sort(nums);
        BackTrack(nums, new List<int>(), 0);
        return result;
    }

    public void BackTrack(int[] nums, List<int> path, int index) {
        result.Add(new List<int>(path));
        for (int i = index; i < nums.Length; i++) {
            if (i > index && nums[i] == nums[i-1]) continue;
            path.Add(nums[i]);
            BackTrack(nums, path, i + 1);
            path.RemoveAt(path.Count - 1);
        }
    }
}

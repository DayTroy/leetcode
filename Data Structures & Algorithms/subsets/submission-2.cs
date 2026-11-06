public class Solution {
    List<List<int>> result = new();
    public List<List<int>> Subsets(int[] nums) {
        List<int> path = new();
        BackTrack(nums, path, 0);

        return result;
    }


    public void BackTrack(int[] nums, List<int> path, int startIndex) {
        List<int> copy = [.. path];
        result.Add(copy);
        for (int i = startIndex; i < nums.Length; i++) {
            if (!path.Contains(nums[i])) {
                path.Add(nums[i]);
                BackTrack(nums, path, i + 1);
                path.Remove(nums[i]);
            }
        }
    }
}

public class Solution {
    public List<List<int>> CombinationSum(int[] nums, int target) {
        List<List<int>> result = new();
        List<int> path = new();
        
        System.Array.Sort(nums);
        
        BackTrack(nums, target, path, 0, result);
        return result;
    }

    private void BackTrack(int[] nums, int remainTarget, List<int> path, int index, List<List<int>> result) {
        if (remainTarget == 0) {
            result.Add(new List<int>(path));
            return;
        }

        for (int i = index; i < nums.Length; i++) {
            if (nums[i] > remainTarget) {
                break; 
            }

            path.Add(nums[i]);
            BackTrack(nums, remainTarget - nums[i], path, i, result);
            path.RemoveAt(path.Count - 1);
        }
    }
}

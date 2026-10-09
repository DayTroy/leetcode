public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var data = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++) {
            int diff = target - nums[i];

            if (data.ContainsKey(diff)) {
                return [data[diff], i];
            } else {
                data.Add(nums[i], i);
            }
        }

        return [];
    }
}

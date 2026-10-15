public class Solution {
    public List<List<int>> ThreeSum(int[] nums) {
        var result = new List<List<int>>();
        Array.Sort(nums);

        for (int i = 0; i < nums.Length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int l = i + 1;
            int r = nums.Length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    result.Add(new List<int>() { nums[i], nums[l], nums[r] });
                    l++;
                    r--;
                    while (nums[l] == nums[l - 1] && l < r) {
                        l++;
                    }
                    while (nums[r] == nums[r + 1] && l < r) {
                        r--;
                    }
                }
            }
        }

        return result;
    }
}

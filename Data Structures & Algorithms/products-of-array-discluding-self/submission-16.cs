public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        var prefix = Enumerable.Repeat(1, nums.Length).ToArray();
        var suffix = Enumerable.Repeat(1, nums.Length).ToArray();
        var result = Enumerable.Repeat(1, nums.Length).ToArray();

        for (int i = 1; i < nums.Length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (int i = nums.Length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for (int i = 0; i < nums.Length; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}

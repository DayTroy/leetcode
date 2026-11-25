public class Solution {
    public int Rob(int[] nums) {
        if (nums.Length == 1) return nums[0];
    
        int res1 = DP(nums[0..(nums.Length - 1)]);
        int res2 = DP(nums[1..nums.Length]);

        return Math.Max(res1, res2);
    }

    public int DP(int[] nums) {
        int prev1 = 0;
        int prev2 = 0;

        foreach (int num in nums) {
            int temp = Math.Max(num + prev2, prev1);
            prev2 = prev1;
            prev1 = temp;
        }

        return prev1;
    }
}

public class Solution {
    Dictionary<int, int> memo = new(); 
    public int Rob(int[] nums) {      
        return DFS(nums, 0);
    }

    public int DFS(int[] nums, int i) {
        if (i >= nums.Length) return 0;

        if (memo.ContainsKey(i)) return memo[i];

        int robNow = nums[i] + DFS(nums, i + 2);
        int skip = DFS(nums, i + 1);

        int result = Math.Max(robNow, skip);
        memo[i] = result;
        return result;
    }
}

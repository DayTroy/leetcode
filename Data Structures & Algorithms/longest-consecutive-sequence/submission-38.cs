public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> numSet = nums.ToHashSet();
        int longest = 0;
    
        foreach (int num in numSet) {
            int count = 1;
            int copyNum = num;
            if (!numSet.Contains(copyNum - 1)) {
                while (numSet.Contains(copyNum + 1)) {
                    count++;
                    copyNum++;
                }
            }
            
            longest = Math.Max(longest, count);
        }

        return longest;
    }
}

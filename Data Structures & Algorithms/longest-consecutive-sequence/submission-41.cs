public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> numSet = new HashSet<int>(nums);
        int longest = 0;

        foreach (int num in numSet) {
            int count = 0;
            if (!numSet.Contains(num - 1)) {
                while (numSet.Contains(num + count)) {
                    count++;
                    longest = Math.Max(longest, count);
                }
            }
        }

        return longest;
    }
}

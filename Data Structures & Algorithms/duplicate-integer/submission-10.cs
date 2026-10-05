public class Solution {
    public bool hasDuplicate(int[] nums) {
        var data = new HashSet<int>();
        foreach (int num in nums) {
            if (data.Contains(num)) return true;
            data.Add(num);
        }

        return false;
    }
}
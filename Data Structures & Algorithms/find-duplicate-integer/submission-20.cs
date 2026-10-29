public class Solution {
    public int FindDuplicate(int[] nums) {
        int l = 0;
        int r = 0;
        while (true) {
            l = nums[l];
            r = nums[nums[r]];

            if (l == r) break;
        }

        int s = 0;
        
        while (s != r) {
            s = nums[s];
            r = nums[r];
        }

        return s;
    }
}

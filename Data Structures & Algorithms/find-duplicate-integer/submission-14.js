class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {   
        // [1,2,3,2,2]
        // sf

         // [1,2,3,2,2]
         //    s
         //      f

         // [1,2,3,2,2]
         //      s
         //      f

         // [1,2,3,2,2]
         //  c
         //      s
        for (let i = 0; i < nums.length; i++) {
            const idx = Math.abs(nums[i]) - 1;

            if (nums[idx] < 0) {
                return Math.abs(nums[i]);
            }

            nums[idx] *=  -1;
        }
    }
}

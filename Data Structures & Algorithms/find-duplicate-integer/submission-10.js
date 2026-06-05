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
       let slow = nums[0];
       let fast = nums[0];

       while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) break;
       }

       let curr = nums[0];

        while (true) {
            if (slow === curr) return slow;

            slow = nums[slow];
            curr = nums[curr];
        }
    }
}

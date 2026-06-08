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
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (slow === fast) break;
        }

        let curr = 0;
        while (slow !== null) {
            curr = nums[curr];
            slow = nums[slow];

            if (slow === curr) return curr;
        }
    }
}

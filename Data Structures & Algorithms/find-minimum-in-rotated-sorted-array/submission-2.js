class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [3,4,5,6,1,2]
    
    findMin(nums) {
        let l = 0, r = nums.length - 1;
        let min = nums[0];

        while (l <= r) {
            if (nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }

            const m = Math.floor((l + r) / 2);

            min = Math.min(min, nums[m]);

            if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        } 

        return min;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [3,4,5,6,1,2]
    // l
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = +Infinity;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (nums[l] <= nums[m]) {
                min = Math.min(min, nums[l]);
            }

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

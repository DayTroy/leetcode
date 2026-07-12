class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // [4,5,6,7,0,1,2]
    // [1, 3, 5, 2, 6]

    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === nums[m]) return m;

            if (nums[l] <= nums[m]) {
                if (target > nums[m] || target < nums[l]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target < nums[m] || target > nums[r]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }

        return -1;
    }
}

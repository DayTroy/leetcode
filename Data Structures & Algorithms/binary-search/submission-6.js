class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // [-1,0,2,4,6,8], 4
    //.      M

    // [1, 2, 3, 4, 5]
           // M

    search(nums, target) {
        nums.sort((a, b) => a - b);
        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((r + l) / 2);

            if (target > nums[m]) {
                l = m + 1;
            } else if (target < nums[m]) {
                r = m - 1;
            } else {
                return m;
            }
        }

        return -1;
    }
}

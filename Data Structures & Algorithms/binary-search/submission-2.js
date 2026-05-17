class Solution {


    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        nums.sort((a, b) => a - b);

        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === nums[m]) {
                return m;
            } else if (target > nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
}

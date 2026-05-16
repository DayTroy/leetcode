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
            const m = Math.floor((r + l) / 2);

            if (nums[m] === target) {
                return m;
            }
            
            if (target > nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
}

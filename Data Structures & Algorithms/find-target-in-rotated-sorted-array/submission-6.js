class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // [3,4,5,6,1,2], target = 4
    // 

    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === nums[m]) return m;

            if (nums[l] <= nums[m]) {
                if (target < nums[l] || target > nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target > nums[r] || target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }

        return -1
    }
}

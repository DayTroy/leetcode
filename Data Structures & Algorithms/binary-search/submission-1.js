class Solution {
    binarySearch(l, r, nums, target) {
        if (l > r) return -1;
        const m = Math.floor((r + l) / 2);

        if (target === nums[m]) return m;

        if (target > nums[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }

        return this.binarySearch(l, r, nums, target);
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(0, nums.length - 1, nums, target);
    }
}

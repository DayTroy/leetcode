class Solution {

    binarySearch(nums, target, l, r, m) {
        if (l > r) return -1;
        
        if (target === nums[m]) return m;

        if (target > nums[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }

        m = Math.floor((l + r) / 2);

        return this.binarySearch(nums, target, l, r, m);
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        nums.sort((a, b) => a - b);
        let l = 0, r = nums.length - 1;
        const m = Math.floor((l + r) / 2);

        return this.binarySearch(nums, target, l, r, m);
    }
}

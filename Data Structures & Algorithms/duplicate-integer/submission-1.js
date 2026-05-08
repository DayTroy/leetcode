class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if ([...new Set(nums)].length !== nums.length) {
            return true;
        }

        return false
    }
}

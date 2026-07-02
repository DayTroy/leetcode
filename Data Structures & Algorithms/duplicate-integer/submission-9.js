class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const check = new Map();

        for (let num of nums) {
            if (check.has(num)) return true;
            check.set(num, 0);
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const check = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (check.has(target - nums[i])) {
                return [check.get(target - nums[i]), i]
            }
            check.set(nums[i], i);
        }
    }
}

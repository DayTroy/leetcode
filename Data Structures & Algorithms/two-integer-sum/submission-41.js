class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const data = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (data.has(diff)) return [data.get(diff), i];
            data.set(nums[i], i);
        }
    }
}

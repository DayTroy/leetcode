class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const data = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;

            if (data.has(diff)) {
                return [i, data.get(diff)]
            }

            data.set(num, i);
        }
    }
}

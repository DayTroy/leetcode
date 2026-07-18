class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let count = 0;
            for (let j = i; j < nums.length; j++) {
                count += nums[j];
                max = Math.max(max, count);
            }
        }

        return max;
    }
}

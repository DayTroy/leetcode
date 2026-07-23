class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0];
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum = nums[i] + sum;
            max = Math.max(max, sum);
            if (sum < 0) {
                sum = 0;
            }
        }

        return max;
    }
}

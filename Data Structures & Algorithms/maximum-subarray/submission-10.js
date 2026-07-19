class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [2,-3,4,-2,2,1,-1,4]
    // 2 + (-3) = -1;

    // 4 + -2 + 2 = 

    maxSubArray(nums) {
        let max = nums[0];
        let sum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            sum = Math.max(nums[i], sum + nums[i]);
            max = Math.max(max, sum);
        }

        return max;
    }
}

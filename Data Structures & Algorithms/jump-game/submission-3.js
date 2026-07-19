class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // [1,2,0,1,0]
    canJump(nums) {
        let reach = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > reach) {
                return false;
            }

            if (i + nums[i] > reach) {
                reach = i + nums[i];
            }

        }

        return true;
    }
}

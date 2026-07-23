class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let reach = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > reach) return false;

            reach = Math.max(reach, nums[i] + i);
        }

        return true;
    }
}

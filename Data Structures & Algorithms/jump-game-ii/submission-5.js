class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let l = 0, r = 0;
        let reach = 0;

        while (r < nums.length - 1) {
            for (let i = l; i <= r; i++) {
                reach = Math.max(reach, nums[i] + i);
            }

            l = r + 1;
            r = reach;
            jumps++;
        }

        return jumps;
    }
}

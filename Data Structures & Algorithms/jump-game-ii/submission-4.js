class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let l = 0, r = 0;
        let farthest = 0;
        let res = 0;

        while (r < nums.length - 1) {
            for (let i = l; i <= r; i++) {
                farthest = Math.max(farthest, nums[i] + i);
            }
            res++;
            l = r + 1;
            r = farthest;
        }

        return res;
    }
}

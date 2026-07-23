class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let res = 0;
        let l = 0, r = 0;
        
        while (r < nums.length - 1) {
            let reach = 0;
            for (let i = l; i <= r; i++) {
                reach = Math.max(reach, nums[i] + i);
            }

            res++;
            l = r + 1;
            r = reach;
        }

        return res;
    }
}

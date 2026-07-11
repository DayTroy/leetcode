class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        let l = 0;

        for (let i = 0; i < nums.length; i++) {
            let isWent = k;
            let max = nums[l];
            let r = i;
            while (isWent !== 0) {
                max = Math.max(max, nums[r]);
                r++;
                isWent--;
            }
            if (!max) break;
            res.push(max);
            l++;
        }
        
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        let l = 0;

        for (let r = k; r < nums.length + 1; r++) {
            res.push(Math.max(...nums.slice(l, r)))
            l++;
        }
        
        return res;
    }
}

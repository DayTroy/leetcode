class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // [1,2,1,0,4,2,6]
    // l.     r
    // output = [ ]
    // q = [2, 1]

    maxSlidingWindow(nums, k) {
        const queue = [];
        let l = 0;
        const res = [];

        for (let r = 0; r < nums.length; r++) {
            while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[r]) {
                queue.pop();
            }
            queue.push(r);

            if (l > queue[0]) {
                queue.shift();
            }

            if (r - l + 1 >= k) {
                res.push(nums[queue[0]]);
                l++;
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const queue = [];
        const res = [];
        let l = 0, r = 0;

        while (r < nums.length) {
            while (queue.length > 0 && nums[r] > nums[queue[queue.length - 1]]) {
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

            r++;
        }

        return res;
    }
}

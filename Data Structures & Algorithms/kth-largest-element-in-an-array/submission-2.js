class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const queue = new MaxPriorityQueue();

        for (const num of nums) {
            queue.enqueue(num);
        }

        const res = [];

        while (k !== 0) {
            res.push(queue.dequeue());
            k--;
        }


        return res[res.length - 1];
    }
}

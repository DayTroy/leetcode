class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MaxPriorityQueue();
        const res = [];

        for (const num of nums) {
            heap.enqueue(num);
        }

        while (k != 0) {
            res.push(heap.dequeue())
            k--;
        }

        return res[res.length - 1]
    }
}

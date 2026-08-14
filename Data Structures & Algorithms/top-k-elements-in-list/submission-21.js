class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        const heap = new MaxPriorityQueue(item => item.freq);
        for (const [key, value] of frequency) {
            heap.enqueue({ freq: value, num: key })
        }

        const res = [];

        while (res.length !== k) {
            res.push(heap.dequeue().num);
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();

        for (let num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        const heap = new MinPriorityQueue((x) => x[1]);

        for (const [value, freq] of frequency) {
            heap.enqueue([value, freq]);
            if (heap.size() > k) heap.dequeue();
        }

        const res = [];

        for (let i = 0; i < k; i++) {
            const [num, cnt] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}

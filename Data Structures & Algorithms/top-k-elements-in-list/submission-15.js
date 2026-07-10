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

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [value, freq] of frequency) {
            buckets[freq].push(value);
        }
        const res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                res.push(num);
            }
            if (res.length === k) break;
        }

        return res;
    }
}

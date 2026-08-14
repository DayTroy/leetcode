class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        const frequency = new Map();

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        for (const [key, value] of frequency) {
            buckets[value].push(key);
        }

        const res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const item of buckets[i]) {
                res.push(item);
                if (res.length === k) return res;
            }
        }
    }
}

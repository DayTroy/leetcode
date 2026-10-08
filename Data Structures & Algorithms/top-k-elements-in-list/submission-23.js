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
            const bucket = buckets[i];

            for (let j = bucket.length - 1; j >= 0; j--) {
                if (k == 0) return res;
                res.push(bucket[j]);
                k--;
            }
        }
        return res;
    }
}

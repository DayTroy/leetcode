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

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [key, value] of frequency) {
            buckets[value].push(key);
        }

        const res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (res.length === k) break;
            while (buckets[i].length > 0) {
                const item = buckets[i].pop();
                res.push(item);
            }
        }

        return res;
    }
}

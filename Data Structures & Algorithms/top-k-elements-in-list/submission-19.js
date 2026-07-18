class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        const check = new Map();

        for (let num of nums) {
            check.set(num, (check.get(num) || 0) + 1);
        }

        for (let [key, value] of check) {
            buckets[value].push(key);
        }

        const res = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            for (const n of buckets[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        return [...freq].sort((a, b) => b[1] - a[1]).map(item => item[0]).slice(0, k);
    }
}

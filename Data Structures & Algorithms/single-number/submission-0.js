class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const data = new Map();

        for (let num of nums) {
            data.set(num, (data.get(num) || 0) + 1);
        }

        for (const [key, value] of data) {
            if (value === 1) return key;
        }
    }
}

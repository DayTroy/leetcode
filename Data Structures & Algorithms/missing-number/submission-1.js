class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const check = Array.from({length: nums.length + 1 }, (_, index) => index);

        for (let item of check) {
            if (!nums.includes(item)) return item;
        }
    }
}

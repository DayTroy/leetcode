class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map(num => num ** 2).sort((a, b) => a - b);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentNumber = num;
                let count = 1;

                while (numSet.has(currentNumber + 1)) {
                    currentNumber++;
                    count++;
                }

                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}

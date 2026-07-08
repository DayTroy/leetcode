class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [2,20,4,10,3,4,5]
    // 
    longestConsecutive(nums) {
        nums = new Set(nums);
        let longest = 0;

        for (let num of nums) {
            if (!nums.has(num - 1)) {
                let length = 1;
                while (nums.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}

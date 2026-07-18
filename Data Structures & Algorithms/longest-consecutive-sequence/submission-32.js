class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const numsSet = new Set(nums);
        for (let i = 0; i < nums.length; i++) {
            let length = 1;
            
            while (numsSet.has(nums[i] + length)) {
                length++;
            }   

            longest = Math.max(longest, length);
        }

        return longest;
    }
}

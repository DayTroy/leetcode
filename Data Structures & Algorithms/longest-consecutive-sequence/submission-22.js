class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [2,20,4,10,3,4,5]

    // [2,3,4,4,5,10,20]
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);
        let maxSeq = 1;
        let count = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;

            if (nums[i] - nums[i - 1] === 1) {
                count++;
            } else {
                count = 1;
            }
            maxSeq = Math.max(maxSeq, count);
        }

        return maxSeq;
    }
}

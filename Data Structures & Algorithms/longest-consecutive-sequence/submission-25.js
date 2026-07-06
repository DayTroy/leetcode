class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // [2,20,4,10,3,4,5]
    //  
    longestConsecutive(nums) {
        if (nums.length <= 1) return nums.length;

        const arr = [...new Set(nums)];

        let longest = 1;
        for (let i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            let count = 1;
            while (arr.includes(currentNumber + 1)) {
                currentNumber++;
                count++;
            }
            longest = Math.max(longest, count);

        }

        return longest;
    }
}

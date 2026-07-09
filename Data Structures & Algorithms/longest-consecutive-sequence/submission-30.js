class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const numsSet = new Set(nums);

        for (let num of numsSet) {
            let count = 1;
            if (!numsSet.has(num - 1)) {
                let currNum = num;
                while (numsSet.has(currNum + 1)) {
                    count++;
                    currNum++;

                }
            }
            longest = Math.max(longest, count);
        }

        return longest;
    }
}

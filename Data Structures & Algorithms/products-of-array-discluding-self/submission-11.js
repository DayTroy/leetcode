class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // [1,2,4,6]
    // [1,2,4,6]
    // [48]
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
            let total = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    total *= nums[j]
                }
            }
            res[i] = total;
        }
        return res;
    }
}

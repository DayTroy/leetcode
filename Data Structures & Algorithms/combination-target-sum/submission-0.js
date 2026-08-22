class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function backtrack(startIndex, path, sum) {
            if (sum === target) {
                res.push([...path]);
                return;
            }

            if (sum > target) {
                return;
            }

            for (let i = startIndex; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i, path, sum + nums[i]);
                path.pop();
            }
        }

        backtrack(0, [], 0)

        return res;
    }
}

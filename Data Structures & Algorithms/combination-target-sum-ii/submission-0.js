class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a - b);

        function backtrack(startIndex, path, sum) {
            if (sum === target) {
                res.push([...path]);
                return;
            }

            if (sum > target) {
                return;
            }

            for (let i = startIndex; i < candidates.length; i++) {
                if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
                path.push(candidates[i]);
                backtrack(i + 1, path, sum + candidates[i]);
                path.pop();
            }
        }

        backtrack(0, [], 0);
        return res;
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    // [[1,4],[0,2],[3,5]]

    //  [0,2] [1,4] [3,5]
    // [0,4]

    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];
        
        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            const prev = res[res.length - 1];

            if (curr[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                res.push(curr);
            }
        }

        return res;
    }
}
